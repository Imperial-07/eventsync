import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Calendar,
  Users,
  Target,
  Heart,
  Lightbulb,
  Shield,
  Rocket,
  TrendingUp,
  Globe,
  ArrowRight,
  Zap,
} from "lucide-react";

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 md:py-32 bg-linear-to-br from-blue-50 via-blue-100/50 to-background dark:from-blue-950/20 dark:via-blue-900/10 dark:to-background">
        {/* Pixelated Dots Background */}
        <div className="absolute inset-0 opacity-40 dark:opacity-20">
          <div
            className="absolute inset-0 animate-float"
            style={{
              backgroundImage: `radial-gradient(circle, rgb(59, 130, 246) 1px, transparent 1px)`,
              backgroundSize: "24px 24px",
            }}
          />
          <div
            className="absolute inset-0 animate-float-reverse"
            style={{
              backgroundImage: `radial-gradient(circle, rgb(96, 165, 250) 1px, transparent 1px)`,
              backgroundSize: "32px 32px",
            }}
          />
        </div>

        {/* Animated overlay gradient */}
        <div className="absolute inset-0 bg-linear-to-t from-background via-transparent to-transparent" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
              
              <span className="text-sm font-medium text-foreground">
                About EventSync
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
              Building the Future of{" "}
              <span className="bg-linear-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                Event Management
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              We&apos;re on a mission to make event planning seamless,
              efficient, and enjoyable for teams and individuals worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div className="text-center space-y-2">
              <div className="text-4xl md:text-5xl font-bold text-foreground">
                10K+
              </div>
              <div className="text-sm text-muted-foreground">
                Events Managed
              </div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-4xl md:text-5xl font-bold text-foreground">
                5K+
              </div>
              <div className="text-sm text-muted-foreground">Happy Users</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-4xl md:text-5xl font-bold text-foreground">
                98%
              </div>
              <div className="text-sm text-muted-foreground">
                Satisfaction Rate
              </div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-4xl md:text-5xl font-bold text-foreground">
                24/7
              </div>
              <div className="text-sm text-muted-foreground">
                Support Available
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <Badge variant="outline" className="w-fit">
                  Our Mission
                </Badge>
                <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
                  Simplifying Event Management for Everyone
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  EventSync was born from a simple observation: managing events
                  shouldn&apos;t be complicated. We believe that powerful tools
                  should be intuitive, and that great design can make work feel
                  effortless.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Our platform combines cutting-edge technology with thoughtful
                  design to help you focus on what matters most—creating
                  memorable experiences for your attendees.
                </p>
                <div className="flex flex-wrap gap-4 pt-4">
                  <Link href="/auth">
                    <Button className="gap-2 group">
                      Get Started
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </Link>
                  <Link href="/events">
                    <Button variant="outline">Explore Events</Button>
                  </Link>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <Card className="group hover:shadow-[0_0_40px_rgba(59,130,246,0.5)] hover:-translate-y-2 transition-all duration-300 ease-out cursor-pointer">
                  <CardHeader>
                    <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 mb-2">
                      <Target className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle>Focused</CardTitle>
                    <CardDescription>
                      Laser-focused on solving real event management challenges
                    </CardDescription>
                  </CardHeader>
                </Card>

                <Card className="hover:shadow-[0_0_30px_rgba(59,130,246,0.3)] hover:-translate-y-2 transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 mb-2">
                      <Rocket className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle>Innovative</CardTitle>
                    <CardDescription>
                      Constantly pushing boundaries with new features
                    </CardDescription>
                  </CardHeader>
                </Card>

                <Card className="group hover:shadow-[0_0_40px_rgba(59,130,246,0.5)] hover:-translate-y-2 transition-all duration-300 ease-out cursor-pointer">
                  <CardHeader>
                    <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 mb-2">
                      <Shield className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle>Secure</CardTitle>
                    <CardDescription>
                      Enterprise-grade security to protect your data
                    </CardDescription>
                  </CardHeader>
                </Card>

                <Card className="group hover:shadow-[0_0_40px_rgba(59,130,246,0.5)] hover:-translate-y-2 transition-all duration-300 ease-out cursor-pointer">
                  <CardHeader>
                    <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 mb-2">
                      <Globe className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle>Global</CardTitle>
                    <CardDescription>
                      Supporting teams across the world, 24/7
                    </CardDescription>
                  </CardHeader>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 md:py-32 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Section Header */}
            <div className="text-center space-y-4 mb-16">
              <Badge variant="outline" className="mx-auto rounded-2xl">
                Our Values
              </Badge>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
                What Drives Us Forward
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Our core values guide everything we do, from product development
                to customer support.
              </p>
            </div>

            {/* Values Grid */}
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="group hover:shadow-[0_0_40px_rgba(59,130,246,0.5)] hover:-translate-y-2 transition-all duration-300 ease-out cursor-pointer">
                <CardHeader>
                  <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 mb-4">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle>User-Centric</CardTitle>
                  <CardDescription>
                    Every feature we build starts with understanding our
                    users&apos; needs and pain points.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="group hover:shadow-[0_0_40px_rgba(59,130,246,0.5)] hover:-translate-y-2 transition-all duration-300 ease-out cursor-pointer">
                <CardHeader>
                  <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 mb-4">
                    <Lightbulb className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle>Innovation</CardTitle>
                  <CardDescription>
                    We embrace new technologies and ideas to stay ahead of the
                    curve.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="group hover:shadow-[0_0_40px_rgba(59,130,246,0.5)] hover:-translate-y-2 transition-all duration-300 ease-out cursor-pointer">
                <CardHeader>
                  <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 mb-4">
                    <Heart className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle>Passion</CardTitle>
                  <CardDescription>
                    We&apos;re passionate about creating tools that make a real
                    difference.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="group hover:shadow-[0_0_40px_rgba(59,130,246,0.5)] hover:-translate-y-2 transition-all duration-300 ease-out cursor-pointer">
                <CardHeader>
                  <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 mb-4">
                    <TrendingUp className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle>Excellence</CardTitle>
                  <CardDescription>
                    We strive for excellence in everything we do, from code
                    quality to customer service.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="group hover:shadow-[0_0_40px_rgba(59,130,246,0.5)] hover:-translate-y-2 transition-all duration-300 ease-out cursor-pointer">
                <CardHeader>
                  <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 mb-4">
                    <Shield className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle>Transparency</CardTitle>
                  <CardDescription>
                    Open communication and honest relationships with our
                    community.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="group hover:shadow-[0_0_40px_rgba(59,130,246,0.5)] hover:-translate-y-2 transition-all duration-300 ease-out cursor-pointer">
                <CardHeader>
                  <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 mb-4">
                    <Zap className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle>Speed</CardTitle>
                  <CardDescription>
                    Fast iterations, quick responses, and rapid feature
                    delivery.
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center space-y-4 mb-12">
              <Badge variant="outline" className="mx-auto rounded-2xl">
                Our Story
              </Badge>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
                How EventSync Came to Be
              </h2>
            </div>

            <Card className="group hover:shadow-[0_0_40px_rgba(59,130,246,0.5)] hover:-translate-y-2 transition-all duration-300 ease-out cursor-pointer">
              <CardContent className="p-8 md:p-12 space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  EventSync started at a hackathon when our team noticed
                  something obvious but overlooked: event management tools were
                  either too complex, too outdated, or too slow.
                </p>
                <p>
                  Instead of waiting for a perfect moment, we decided to build
                  the solution ourselves — in just 24 hours.
                </p>
                <p>
                  Fueled by energy drinks, quick user testing, and nonstop
                  prototyping, we created the first version of EventSync. What
                  surprised us was the reaction: people immediately loved the
                  simplicity, the speed, and the way everything just worked.
                </p>
                <p className="font-semibold text-foreground pt-4">
                  Since then, EventSync has grown far beyond that initial build.
                  It now helps organizers of all sizes — from student clubs to
                  full-scale organizations — manage events with automation, and
                  a clean, modern interface.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="border-t py-12 mt-auto">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-linear-to-br from-primary to-primary/60">
                <Calendar className="w-4 h-4 text-primary-foreground" />
              </div>
              <span className="font-bold">EventSync</span>
            </div>
            <p className="text-sm text-muted-foreground">
              © 2025 EventSync. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link
                href="/about"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                About
              </Link>
              <Link
                href="/contact"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Contact
              </Link>
              <Link
                href="/privacy"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Privacy
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
