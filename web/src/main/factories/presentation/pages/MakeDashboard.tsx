import { Dashboard } from "@/presentation/pages/Dashboard/Dashboard";
import { makeRemoteGetUsersMetrics } from "../../usecases/users/make-get-users-metrics";
import { makeRemoteGetSubjectsMetricsByUserId } from "../../usecases/subjectTeacher/make-get-subjects-metrics-by-user-id";

export function MakeDashboard() {
  const getUsersMetrics = makeRemoteGetUsersMetrics()
  const getSubjectsMetricsByUserId = makeRemoteGetSubjectsMetricsByUserId()
  return <Dashboard getUsersMetrics={getUsersMetrics} getSubjectsMetrics={getSubjectsMetricsByUserId} />
}