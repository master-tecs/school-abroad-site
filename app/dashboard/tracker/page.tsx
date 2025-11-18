"use client";

import { useState } from "react";
import { Plus, CheckCircle2, Clock, XCircle, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import "./tracker.scss";

interface Application {
  id: string;
  university: string;
  program: string;
  status: "pending" | "reviewing" | "accepted" | "rejected";
  submittedDate: string;
  decisionDate?: string;
}

const applications: Application[] = [
  {
    id: "1",
    university: "University of Toronto",
    program: "MSc Computer Science",
    status: "reviewing",
    submittedDate: "2025-09-15",
  },
  {
    id: "2",
    university: "McGill University",
    program: "MBA",
    status: "accepted",
    submittedDate: "2025-08-20",
    decisionDate: "2025-10-10",
  },
  {
    id: "3",
    university: "University of British Columbia",
    program: "PhD in Engineering",
    status: "pending",
    submittedDate: "2025-10-01",
  },
];

export default function ApplicationTrackerPage() {
  const [isAdding, setIsAdding] = useState(false);

  const getStatusIcon = (status: Application["status"]) => {
    switch (status) {
      case "accepted":
        return <CheckCircle2 className="tracker-page__status-icon tracker-page__status-icon--accepted" />;
      case "reviewing":
        return <Clock className="tracker-page__status-icon tracker-page__status-icon--reviewing" />;
      case "rejected":
        return <XCircle className="tracker-page__status-icon tracker-page__status-icon--rejected" />;
      default:
        return <Clock className="tracker-page__status-icon tracker-page__status-icon--pending" />;
    }
  };

  const getStatusBadge = (status: Application["status"]) => {
    const variants = {
      accepted: "default",
      reviewing: "secondary",
      rejected: "destructive",
      pending: "outline",
    };
    return <Badge variant={variants[status]}>{status.charAt(0).toUpperCase() + status.slice(1)}</Badge>;
  };

  return (
    <div className="tracker-page">
      <div className="tracker-page__header">
        <div>
          <h1 className="tracker-page__title">Application Tracker</h1>
          <p className="tracker-page__subtitle">
            Track your university applications and stay organized throughout the process
          </p>
        </div>
        <Dialog open={isAdding} onOpenChange={setIsAdding}>
          <DialogTrigger asChild>
            <Button size="lg" className="tracker-page__add-button">
              <Plus className="tracker-page__add-icon" />
              Add Application
            </Button>
          </DialogTrigger>
          <DialogContent className="tracker-page__dialog">
            <DialogHeader>
              <DialogTitle>Add New Application</DialogTitle>
              <DialogDescription>
                Track a new university application
              </DialogDescription>
            </DialogHeader>
            <div className="tracker-page__form">
              <div className="tracker-page__form-group">
                <Label>University Name</Label>
                <Input placeholder="e.g., University of Toronto" />
              </div>
              <div className="tracker-page__form-group">
                <Label>Program</Label>
                <Input placeholder="e.g., MSc Computer Science" />
              </div>
              <div className="tracker-page__form-group">
                <Label>Submission Date</Label>
                <Input type="date" />
              </div>
              <div className="tracker-page__form-group">
                <Label>Status</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="pending">Pending</SelectItem>
                    <SelectItem value="reviewing">Under Review</SelectItem>
                    <SelectItem value="accepted">Accepted</SelectItem>
                    <SelectItem value="rejected">Rejected</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Button className="tracker-page__submit-button" onClick={() => setIsAdding(false)}>
                Add Application
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      <div className="tracker-page__stats">
        <Card className="tracker-page__stat-card">
          <CardContent className="tracker-page__stat-content">
            <div className="tracker-page__stat-value">{applications.length}</div>
            <div className="tracker-page__stat-label">Total Applications</div>
          </CardContent>
        </Card>
        <Card className="tracker-page__stat-card">
          <CardContent className="tracker-page__stat-content">
            <div className="tracker-page__stat-value">
              {applications.filter((a) => a.status === "reviewing").length}
            </div>
            <div className="tracker-page__stat-label">Under Review</div>
          </CardContent>
        </Card>
        <Card className="tracker-page__stat-card">
          <CardContent className="tracker-page__stat-content">
            <div className="tracker-page__stat-value tracker-page__stat-value--success">
              {applications.filter((a) => a.status === "accepted").length}
            </div>
            <div className="tracker-page__stat-label">Accepted</div>
          </CardContent>
        </Card>
      </div>

      <div className="tracker-page__applications">
        {applications.map((application) => (
          <Card key={application.id} className="tracker-page__application-card">
            <CardHeader>
              <div className="tracker-page__application-header">
                <div className="tracker-page__application-main">
                  {getStatusIcon(application.status)}
                  <div>
                    <CardTitle className="tracker-page__application-title">
                      {application.university}
                    </CardTitle>
                    <CardDescription className="tracker-page__application-program">
                      {application.program}
                    </CardDescription>
                  </div>
                </div>
                {getStatusBadge(application.status)}
              </div>
            </CardHeader>
            <CardContent>
              <div className="tracker-page__application-info">
                <div className="tracker-page__application-info-item">
                  <Calendar className="tracker-page__application-info-icon" />
                  <span>Submitted: {new Date(application.submittedDate).toLocaleDateString()}</span>
                </div>
                {application.decisionDate && (
                  <div className="tracker-page__application-info-item">
                    <CheckCircle2 className="tracker-page__application-info-icon" />
                    <span>Decision: {new Date(application.decisionDate).toLocaleDateString()}</span>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

