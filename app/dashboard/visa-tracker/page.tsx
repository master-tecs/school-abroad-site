"use client";

import { useState } from "react";
import { Plus, CheckCircle2, Clock, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import "./visa-tracker.scss";

interface VisaStep {
  id: string;
  name: string;
  status: "completed" | "pending" | "in-progress";
  date?: string;
  description: string;
}

interface VisaApplication {
  id: string;
  country: string;
  type: string;
  status: "processing" | "approved" | "rejected" | "pending";
  submittedDate: string;
  steps: VisaStep[];
}

const visaApplications: VisaApplication[] = [
  {
    id: "1",
    country: "Canada",
    type: "Student Visa",
    status: "processing",
    submittedDate: "2025-09-10",
    steps: [
      { id: "1", name: "Application Submitted", status: "completed", date: "2025-09-10", description: "Application submitted successfully" },
      { id: "2", name: "Biometrics Appointment", status: "completed", date: "2025-09-15", description: "Biometrics completed" },
      { id: "3", name: "Medical Examination", status: "completed", date: "2025-09-20", description: "Medical exam passed" },
      { id: "4", name: "Background Check", status: "in-progress", description: "Under review" },
      { id: "5", name: "Final Decision", status: "pending", description: "Awaiting decision" },
    ],
  },
];

export default function VisaTrackerPage() {
  const [isAdding, setIsAdding] = useState(false);
  const application = visaApplications[0];

  const getProgress = () => {
    const completed = application.steps.filter((s) => s.status === "completed").length;
    return (completed / application.steps.length) * 100;
  };

  const getStatusIcon = (status: VisaStep["status"]) => {
    switch (status) {
      case "completed":
        return <CheckCircle2 className="visa-tracker-page__step-icon visa-tracker-page__step-icon--completed" />;
      case "in-progress":
        return <Clock className="visa-tracker-page__step-icon visa-tracker-page__step-icon--in-progress" />;
      default:
        return <Clock className="visa-tracker-page__step-icon visa-tracker-page__step-icon--pending" />;
    }
  };

  return (
    <div className="visa-tracker-page">
      <div className="visa-tracker-page__header">
        <div>
          <h1 className="visa-tracker-page__title">Visa Tracker</h1>
          <p className="visa-tracker-page__subtitle">
            Track your visa application progress and stay updated on every step
          </p>
        </div>
        <Dialog open={isAdding} onOpenChange={setIsAdding}>
          <DialogTrigger asChild>
            <Button size="lg" className="visa-tracker-page__add-button">
              <Plus className="visa-tracker-page__add-icon" />
              New Application
            </Button>
          </DialogTrigger>
          <DialogContent className="visa-tracker-page__dialog">
            <DialogHeader>
              <DialogTitle>Add Visa Application</DialogTitle>
              <DialogDescription>
                Start tracking a new visa application
              </DialogDescription>
            </DialogHeader>
            <div className="visa-tracker-page__form">
              <div className="visa-tracker-page__form-group">
                <Label>Country</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select country" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="canada">Canada</SelectItem>
                    <SelectItem value="usa">United States</SelectItem>
                    <SelectItem value="uk">United Kingdom</SelectItem>
                    <SelectItem value="australia">Australia</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="visa-tracker-page__form-group">
                <Label>Visa Type</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select visa type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="student">Student Visa</SelectItem>
                    <SelectItem value="work">Work Visa</SelectItem>
                    <SelectItem value="tourist">Tourist Visa</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="visa-tracker-page__form-group">
                <Label>Submission Date</Label>
                <Input type="date" />
              </div>
              <Button className="visa-tracker-page__submit-button" onClick={() => setIsAdding(false)}>
                Add Application
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      <Card className="visa-tracker-page__application-card">
        <CardHeader>
          <div className="visa-tracker-page__application-header">
            <div>
              <CardTitle className="visa-tracker-page__application-title">
                {application.country} - {application.type}
              </CardTitle>
              <CardDescription className="visa-tracker-page__application-subtitle">
                Submitted: {new Date(application.submittedDate).toLocaleDateString()}
              </CardDescription>
            </div>
            <Badge className="visa-tracker-page__application-badge visa-tracker-page__application-badge--processing">
              {application.status.charAt(0).toUpperCase() + application.status.slice(1)}
            </Badge>
          </div>
          <div className="visa-tracker-page__progress-section">
            <div className="visa-tracker-page__progress-header">
              <span className="visa-tracker-page__progress-label">Overall Progress</span>
              <span className="visa-tracker-page__progress-value">{Math.round(getProgress())}%</span>
            </div>
            <Progress value={getProgress()} className="visa-tracker-page__progress-bar" />
          </div>
        </CardHeader>
        <CardContent>
          <div className="visa-tracker-page__timeline">
            {application.steps.map((step) => (
              <div key={step.id} className="visa-tracker-page__timeline-item">
                <div className="visa-tracker-page__timeline-line" />
                <div className="visa-tracker-page__timeline-content">
                  <div className="visa-tracker-page__step-header">
                    {getStatusIcon(step.status)}
                    <div className="visa-tracker-page__step-info">
                      <h4 className="visa-tracker-page__step-name">{step.name}</h4>
                      <p className="visa-tracker-page__step-description">{step.description}</p>
                      {step.date && (
                        <span className="visa-tracker-page__step-date">
                          <Calendar className="visa-tracker-page__step-date-icon" />
                          {new Date(step.date).toLocaleDateString()}
                        </span>
                      )}
                    </div>
                    <Badge
                      variant={
                        step.status === "completed"
                          ? "default"
                          : step.status === "in-progress"
                          ? "secondary"
                          : "outline"
                      }
                      className="visa-tracker-page__step-badge"
                    >
                      {step.status === "completed"
                        ? "Completed"
                        : step.status === "in-progress"
                        ? "In Progress"
                        : "Pending"}
                    </Badge>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

