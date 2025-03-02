import { Dashboard } from "@/presentation/pages/Dashboard/Dashboard";
import { makeRemoteGetUsersMetrics } from "../../usecases/users/make-get-users-metrics";

export function MakeDashboard() {
  const getUsersMetrics = makeRemoteGetUsersMetrics()
  return <Dashboard getUsersMetrics={getUsersMetrics} />
}