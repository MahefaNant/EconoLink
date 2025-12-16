// app/dashboard/page.tsx or components/DashboardSkeleton.tsx
"use client";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { CalendarDays, TrendingUp, Wallet, BellRing } from "lucide-react";

export default function DashboardSkeleton() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950">
      <div className="container mx-auto px-4 py-8 space-y-8">
        {/* Header Section */}
        <div className="mb-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div className="space-y-3">
              <Skeleton className="h-10 w-96" />
              <Skeleton className="h-6 w-72" />
            </div>
            <Badge variant="outline" className="px-3 py-1 w-fit">
              <CalendarDays className="w-4 h-4 mr-2" />
              <Skeleton className="h-4 w-40" />
            </Badge>
          </div>
        </div>

        {/* Quick Stats Overview - 4 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[...Array(4)].map((_, i) => (
            <Card key={i} className="hover:shadow-lg transition-shadow">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <Skeleton className="h-5 w-32" />
                <Skeleton className="h-4 w-4 rounded-full" />
              </CardHeader>
              <CardContent>
                <Skeleton className="h-9 w-40 mb-2" />
                <Skeleton className="h-4 w-28" />
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Tabs */}
        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3 lg:w-auto lg:inline-flex">
            <TabsTrigger
              value="overview"
              disabled
              className="flex items-center gap-2"
            >
              <TrendingUp className="w-4 h-4" />
              <Skeleton className="h-4 w-20" />
            </TabsTrigger>
            <TabsTrigger
              value="transactions"
              disabled
              className="flex items-center gap-2"
            >
              <Wallet className="w-4 h-4" />
              <Skeleton className="h-4 w-24" />
            </TabsTrigger>
            <TabsTrigger
              value="budgets"
              disabled
              className="flex items-center gap-2"
            >
              <CalendarDays className="w-4 h-4" />
              <Skeleton className="h-4 w-20" />
            </TabsTrigger>
          </TabsList>

          <div className="space-y-6">
            {/* Reminders Section */}
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <BellRing className="w-5 h-5" />
                    <Skeleton className="h-7 w-48" />
                  </div>
                  <Badge variant="secondary">
                    <Skeleton className="h-4 w-16" />
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[...Array(4)].map((_, i) => (
                    <Skeleton key={i} className="h-20 w-full rounded-lg" />
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Side-by-side: Recent Transactions & Budget Overview */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Recent Transactions */}
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <Wallet className="w-5 h-5" />
                    <Skeleton className="h-7 w-44" />
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[...Array(3)].map((_, i) => (
                      <div
                        key={i}
                        className="flex items-center justify-between"
                      >
                        <div className="flex items-center gap-3">
                          <Skeleton className="h-10 w-10 rounded-full" />
                          <div>
                            <Skeleton className="h-5 w-32" />
                            <Skeleton className="h-4 w-20 mt-1" />
                          </div>
                        </div>
                        <Skeleton className="h-6 w-24" />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Budget Chart */}
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <TrendingUp className="w-5 h-5" />
                      <Skeleton className="h-7 w-40" />
                    </div>
                    <Badge variant="outline">
                      <Skeleton className="h-4 w-24" />
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <Skeleton className="h-64 w-full rounded-lg" />
                </CardContent>
              </Card>
            </div>
          </div>
        </Tabs>

        {/* Footer - Last Updated */}
        <div className="mt-8 pt-6 border-t">
          <div className="flex justify-center">
            <Skeleton className="h-5 w-48" />
          </div>
        </div>
      </div>
    </div>
  );
}
