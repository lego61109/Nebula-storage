import { cronJobs } from "convex/server";
import { internal } from "./_generated/api";
const crons = cronJobs();
crons.interval("nebula link bot", { hours: 6 }, internal.chat.botPost, {});
export default crons;
