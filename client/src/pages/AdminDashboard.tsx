import { useState } from "react";
import { useAuth } from "@/_core/hooks/useAuth";
import { trpc } from "@/lib/trpc";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Loader2, Phone, MessageCircle, Mail, CheckCircle2, Clock, AlertCircle } from "lucide-react";
import { toast } from "sonner";
import { getLoginUrl } from "@/const";
import { useLocation } from "wouter";

export default function AdminDashboard() {
  const { user, loading: authLoading } = useAuth();
  const [, setLocation] = useLocation();
  const [statusFilter, setStatusFilter] = useState<"all" | "pending" | "contacted" | "resolved">("all");
  const [selectedId, setSelectedId] = useState<number | null>(null);

  const { data: stats, isLoading: statsLoading } = trpc.admin.getContactStats.useQuery(undefined, {
    enabled: user?.role === "admin",
  });

  const { data: submissions, isLoading: submissionsLoading, refetch } = trpc.admin.getContactSubmissions.useQuery(
    { status: statusFilter, limit: 50, offset: 0 },
    { enabled: user?.role === "admin" }
  );

  const { data: selectedSubmission } = trpc.admin.getContactSubmissionById.useQuery(
    { id: selectedId! },
    { enabled: selectedId !== null }
  );

  const updateStatus = trpc.admin.updateContactStatus.useMutation({
    onSuccess: () => {
      toast.success("อัปเดตสถานะเรียบร้อยแล้ว");
      refetch();
    },
    onError: (error) => {
      toast.error(error.message || "เกิดข้อผิดพลาด");
    },
  });

  const handleStatusChange = (id: number, status: "pending" | "contacted" | "resolved") => {
    updateStatus.mutate({ id, status });
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "pending":
        return (
          <Badge variant="outline" className="bg-yellow-50 text-yellow-700 border-yellow-300">
            <Clock className="w-3 h-3 mr-1" />
            รอดำเนินการ
          </Badge>
        );
      case "contacted":
        return (
          <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-300">
            <AlertCircle className="w-3 h-3 mr-1" />
            ติดต่อแล้ว
          </Badge>
        );
      case "resolved":
        return (
          <Badge variant="outline" className="bg-green-50 text-green-700 border-green-300">
            <CheckCircle2 className="w-3 h-3 mr-1" />
            เสร็จสิ้น
          </Badge>
        );
      default:
        return <Badge variant="outline">{status}</Badge>;
    }
  };

  const getContactIcon = (method: string) => {
    switch (method) {
      case "phone":
        return <Phone className="w-4 h-4" />;
      case "line":
        return <MessageCircle className="w-4 h-4" />;
      case "email":
        return <Mail className="w-4 h-4" />;
      default:
        return null;
    }
  };

  if (authLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </div>
    );
  }

  if (!user) {
    window.location.href = getLoginUrl();
    return null;
  }

  if (user.role !== "admin") {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Card className="max-w-md">
          <CardHeader>
            <CardTitle className="text-destructive">ไม่มีสิทธิ์เข้าถึง</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">คุณไม่มีสิทธิ์เข้าถึงหน้านี้</p>
            <Button onClick={() => setLocation("/")}>กลับหน้าแรก</Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-muted/30">
      <div className="container py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">แดชบอร์ดแอดมิน</h1>
          <p className="text-muted-foreground">จัดการข้อมูลการติดต่อจากลูกค้า</p>
        </div>

        {/* Statistics */}
        {statsLoading ? (
          <div className="flex justify-center py-8">
            <Loader2 className="w-8 h-8 animate-spin text-primary" />
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium text-muted-foreground">ทั้งหมด</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stats?.total || 0}</div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium text-muted-foreground">รอดำเนินการ</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-yellow-600">{stats?.pending || 0}</div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium text-muted-foreground">ติดต่อแล้ว</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-blue-600">{stats?.contacted || 0}</div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium text-muted-foreground">เสร็จสิ้น</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-green-600">{stats?.resolved || 0}</div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Filters */}
        <Card className="mb-6">
          <CardContent className="pt-6">
            <div className="flex items-center gap-4">
              <label className="text-sm font-medium">กรองตามสถานะ:</label>
              <Select value={statusFilter} onValueChange={(value: any) => setStatusFilter(value)}>
                <SelectTrigger className="w-48">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">ทั้งหมด</SelectItem>
                  <SelectItem value="pending">รอดำเนินการ</SelectItem>
                  <SelectItem value="contacted">ติดต่อแล้ว</SelectItem>
                  <SelectItem value="resolved">เสร็จสิ้น</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Contact Submissions Table */}
        <Card>
          <CardHeader>
            <CardTitle>รายการติดต่อ</CardTitle>
          </CardHeader>
          <CardContent>
            {submissionsLoading ? (
              <div className="flex justify-center py-8">
                <Loader2 className="w-8 h-8 animate-spin text-primary" />
              </div>
            ) : submissions && submissions.length > 0 ? (
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>วันที่</TableHead>
                      <TableHead>ชื่อ</TableHead>
                      <TableHead>เบอร์โทร</TableHead>
                      <TableHead>เรื่อง</TableHead>
                      <TableHead>ช่องทาง</TableHead>
                      <TableHead>สถานะ</TableHead>
                      <TableHead>จัดการ</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {submissions.map((submission) => (
                      <TableRow key={submission.id}>
                        <TableCell className="text-sm">
                          {new Date(submission.createdAt).toLocaleDateString("th-TH", {
                            year: "numeric",
                            month: "short",
                            day: "numeric",
                            hour: "2-digit",
                            minute: "2-digit",
                          })}
                        </TableCell>
                        <TableCell className="font-medium">{submission.name}</TableCell>
                        <TableCell>{submission.phone}</TableCell>
                        <TableCell className="max-w-xs truncate">{submission.subject}</TableCell>
                        <TableCell>
                          <div className="flex items-center gap-1">
                            {getContactIcon(submission.preferredContact)}
                            <span className="text-sm capitalize">{submission.preferredContact}</span>
                          </div>
                        </TableCell>
                        <TableCell>{getStatusBadge(submission.status)}</TableCell>
                        <TableCell>
                          <Select
                            value={submission.status}
                            onValueChange={(value: any) => handleStatusChange(submission.id, value)}
                            disabled={updateStatus.isPending}
                          >
                            <SelectTrigger className="w-40">
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="pending">รอดำเนินการ</SelectItem>
                              <SelectItem value="contacted">ติดต่อแล้ว</SelectItem>
                              <SelectItem value="resolved">เสร็จสิ้น</SelectItem>
                            </SelectContent>
                          </Select>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            ) : (
              <div className="text-center py-8 text-muted-foreground">ไม่มีข้อมูลการติดต่อ</div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
