"use client";

import { Calendar, User, MessageSquare, FileText, Award, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import "./counselling.scss";

interface Counsellor {
  id: string;
  name: string;
  title: string;
  expertise: string[];
  rating: number;
  sessions: number;
  avatar?: string;
}

const counsellors: Counsellor[] = [
  {
    id: "1",
    name: "Dr. Emily Rodriguez",
    title: "Senior Career Counselor",
    expertise: ["Engineering", "Business", "Graduate Studies"],
    rating: 4.9,
    sessions: 245,
  },
  {
    id: "2",
    name: "Prof. James Thompson",
    title: "Academic Advisor",
    expertise: ["Medicine", "Science", "Research Programs"],
    rating: 4.8,
    sessions: 189,
  },
  {
    id: "3",
    name: "Ms. Lisa Wang",
    title: "Career Specialist",
    expertise: ["Arts", "Humanities", "Design"],
    rating: 4.9,
    sessions: 312,
  },
];

export default function CareerCounsellingPage() {
  return (
    <div className="counselling-page">
      <div className="counselling-page__header">
        <div>
          <h1 className="counselling-page__title">Career Counselling</h1>
          <p className="counselling-page__subtitle">
            Get personalized academic and career guidance from expert counselors
          </p>
        </div>
      </div>

      <div className="counselling-page__features">
        <Card className="counselling-page__feature-card">
          <CardHeader>
            <FileText className="counselling-page__feature-icon" />
            <CardTitle>Career Assessment</CardTitle>
            <CardDescription>
              Understand your strengths and find the best career path
            </CardDescription>
          </CardHeader>
        </Card>
        <Card className="counselling-page__feature-card">
          <CardHeader>
            <Briefcase className="counselling-page__feature-icon" />
            <CardTitle>Application Strategy</CardTitle>
            <CardDescription>
              Get expert advice on university and program selection
            </CardDescription>
          </CardHeader>
        </Card>
        <Card className="counselling-page__feature-card">
          <CardHeader>
            <Award className="counselling-page__feature-icon" />
            <CardTitle>Scholarship Guidance</CardTitle>
            <CardDescription>
              Find and apply for scholarships that match your profile
            </CardDescription>
          </CardHeader>
        </Card>
      </div>

      <div className="counselling-page__section">
        <h2 className="counselling-page__section-title">Available Counselors</h2>
        <div className="counselling-page__counselors">
          {counsellors.map((counsellor) => (
            <Card key={counsellor.id} className="counselling-page__counselor-card">
              <CardHeader>
                <div className="counselling-page__counselor-header">
                  <div className="counselling-page__counselor-avatar">
                    <User className="counselling-page__counselor-avatar-icon" />
                  </div>
                  <div>
                    <CardTitle className="counselling-page__counselor-name">
                      {counsellor.name}
                    </CardTitle>
                    <CardDescription className="counselling-page__counselor-title">
                      {counsellor.title}
                    </CardDescription>
                  </div>
                </div>
                <div className="counselling-page__counselor-stats">
                  <div className="counselling-page__counselor-stat">
                    <Award className="counselling-page__counselor-stat-icon" />
                    <span>{counsellor.rating}/5.0</span>
                  </div>
                  <div className="counselling-page__counselor-stat">
                    <MessageSquare className="counselling-page__counselor-stat-icon" />
                    <span>{counsellor.sessions} sessions</span>
                  </div>
                </div>
                <div className="counselling-page__counselor-expertise">
                  {counsellor.expertise.map((exp) => (
                    <Badge key={exp} variant="secondary" className="counselling-page__counselor-badge">
                      {exp}
                    </Badge>
                  ))}
                </div>
              </CardHeader>
              <CardContent>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button className="counselling-page__book-button" fullWidth>
                      <Calendar className="counselling-page__book-icon" />
                      Book Session
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Book Career Counselling Session</DialogTitle>
                      <DialogDescription>
                        Schedule a session with {counsellor.name}
                      </DialogDescription>
                    </DialogHeader>
                    <div className="counselling-page__booking-form">
                      <div className="counselling-page__form-group">
                        <Label>Preferred Date</Label>
                        <Input type="date" />
                      </div>
                      <div className="counselling-page__form-group">
                        <Label>Preferred Time</Label>
                        <Input type="time" />
                      </div>
                      <div className="counselling-page__form-group">
                        <Label>Discussion Topics</Label>
                        <Textarea placeholder="What would you like to discuss?" rows={4} />
                      </div>
                      <Button className="counselling-page__submit-button">
                        Confirm Booking
                      </Button>
                    </div>
                  </DialogContent>
                </Dialog>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

