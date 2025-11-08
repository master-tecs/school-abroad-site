"use client";

import { useState } from "react";
import { Calendar, Video, Clock, Play, Download, Phone, Clock3, MapPin, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import "./mentorship.scss";

interface Call {
  id: string;
  date: string;
  time: string;
  topic: string;
  mentor: string;
  duration: string;
  status: "upcoming" | "completed" | "cancelled";
  recordingUrl?: string;
  zoomLink?: string;
}

const upcomingCalls: Call[] = [
  {
    id: "1",
    date: "Tuesday, November 5, 2025",
    time: "2:00 PM (ET)",
    topic: "Visa Interview Preparation",
    mentor: "Dr. Sarah Johnson",
    duration: "60 min",
    status: "upcoming",
    zoomLink: "https://zoom.us/j/123456789",
  },
  {
    id: "2",
    date: "Friday, November 15, 2025",
    time: "10:00 AM (ET)",
    topic: "University Selection Strategy",
    mentor: "Prof. Michael Chen",
    duration: "45 min",
    status: "upcoming",
    zoomLink: "https://zoom.us/j/987654321",
  },
];

const pastCalls: Call[] = [
  {
    id: "3",
    date: "October 20, 2025",
    time: "3:00 PM (ET)",
    topic: "Application Process Overview",
    mentor: "Dr. Sarah Johnson",
    duration: "55 min",
    status: "completed",
    recordingUrl: "https://example.com/recording-1",
  },
  {
    id: "4",
    date: "October 5, 2025",
    time: "11:00 AM (ET)",
    topic: "Financial Planning for Studies Abroad",
    mentor: "Prof. Michael Chen",
    duration: "50 min",
    status: "completed",
    recordingUrl: "https://example.com/recording-2",
  },
];

export default function MentorshipPage() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  return (
    <div className="mentorship-page">
      <div className="mentorship-page__header">
        <div>
          <h1 className="mentorship-page__title">Mentorship Calls</h1>
          <p className="mentorship-page__subtitle">
            Book one-on-one sessions with expert mentors and access past call recordings
          </p>
        </div>
        <Dialog open={isBookingOpen} onOpenChange={setIsBookingOpen}>
          <DialogTrigger asChild>
            <Button size="lg" className="mentorship-page__book-button">
              <Calendar className="mentorship-page__book-icon" />
              Book New Session
            </Button>
          </DialogTrigger>
          <DialogContent className="mentorship-page__dialog">
            <DialogHeader>
              <DialogTitle>Book Mentorship Session</DialogTitle>
              <DialogDescription>
                Schedule a one-on-one call with one of our expert mentors
              </DialogDescription>
            </DialogHeader>
            <div className="mentorship-page__booking-form">
              <div className="mentorship-page__form-group">
                <Label htmlFor="topic">Discussion Topic</Label>
                <Input id="topic" placeholder="e.g., Visa Interview Preparation" />
              </div>
              <div className="mentorship-page__form-group">
                <Label htmlFor="date">Preferred Date</Label>
                <Input id="date" type="date" />
              </div>
              <div className="mentorship-page__form-group">
                <Label htmlFor="time">Preferred Time</Label>
                <Input id="time" type="time" />
              </div>
              <div className="mentorship-page__form-group">
                <Label htmlFor="notes">Additional Notes (Optional)</Label>
                <Textarea id="notes" placeholder="Any specific questions or topics you'd like to discuss..." rows={4} />
              </div>
              <Button className="mentorship-page__submit-button" onClick={() => setIsBookingOpen(false)}>
                Submit Booking Request
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      <Tabs defaultValue="upcoming" className="mentorship-page__tabs">
        <TabsList className="mentorship-page__tabs-list">
          <TabsTrigger value="upcoming">
            Upcoming Calls ({upcomingCalls.length})
          </TabsTrigger>
          <TabsTrigger value="recordings">
            Past Recordings ({pastCalls.length})
          </TabsTrigger>
        </TabsList>

        <TabsContent value="upcoming" className="mentorship-page__tabs-content">
          <div className="mentorship-page__grid">
            {upcomingCalls.map((call) => (
              <Card key={call.id} className="mentorship-page__card mentorship-page__card--upcoming">
                <CardHeader>
                  <div className="mentorship-page__card-header">
                    <CardTitle className="mentorship-page__card-title">{call.topic}</CardTitle>
                    <Badge className="mentorship-page__card-badge mentorship-page__card-badge--upcoming">
                      Upcoming
                    </Badge>
                  </div>
                  <CardDescription className="mentorship-page__card-description">
                    {call.date} at {call.time}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mentorship-page__card-info">
                    <div className="mentorship-page__card-info-item">
                      <User className="mentorship-page__card-info-icon" />
                      <span>{call.mentor}</span>
                    </div>
                    <div className="mentorship-page__card-info-item">
                      <Clock className="mentorship-page__card-info-icon" />
                      <span>{call.duration}</span>
                    </div>
                  </div>
                  <div className="mentorship-page__card-actions">
                    <Button className="mentorship-page__card-button mentorship-page__card-button--primary" asChild>
                      <a href={call.zoomLink} target="_blank" rel="noopener noreferrer">
                        <Video className="mentorship-page__card-button-icon" />
                        Join Zoom Call
                      </a>
                    </Button>
                    <Button variant="outline" className="mentorship-page__card-button">
                      <Calendar className="mentorship-page__card-button-icon" />
                      Reschedule
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="recordings" className="mentorship-page__tabs-content">
          <div className="mentorship-page__grid">
            {pastCalls.map((call) => (
              <Card key={call.id} className="mentorship-page__card mentorship-page__card--completed">
                <CardHeader>
                  <div className="mentorship-page__card-header">
                    <CardTitle className="mentorship-page__card-title">{call.topic}</CardTitle>
                    <Badge className="mentorship-page__card-badge mentorship-page__card-badge--completed">
                      Completed
                    </Badge>
                  </div>
                  <CardDescription className="mentorship-page__card-description">
                    {call.date} at {call.time}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mentorship-page__card-info">
                    <div className="mentorship-page__card-info-item">
                      <User className="mentorship-page__card-info-icon" />
                      <span>{call.mentor}</span>
                    </div>
                    <div className="mentorship-page__card-info-item">
                      <Clock className="mentorship-page__card-info-icon" />
                      <span>{call.duration}</span>
                    </div>
                  </div>
                  <div className="mentorship-page__card-actions">
                    <Button className="mentorship-page__card-button mentorship-page__card-button--primary" asChild>
                      <a href={call.recordingUrl} target="_blank" rel="noopener noreferrer">
                        <Play className="mentorship-page__card-button-icon" />
                        Watch Recording
                      </a>
                    </Button>
                    <Button variant="outline" className="mentorship-page__card-button">
                      <Download className="mentorship-page__card-button-icon" />
                      Download
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}

