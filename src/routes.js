



// // pages
import Presentation from "./pages/Presentation";
import DashboardOverview from "./pages/dashboard/DashboardOverview";
import Tasks from "./pages/Tasks";
import Groups from "./pages/Groups";
import Courses from "./pages/Courses";
import Access from "./pages/Access";
import News from "./pages/News";
import ProfileSettings from "./pages/ProfileSettings";
import GeneralSettings from "./pages/GeneralSettings";
import ProductItems from "./pages/ProductItems";
import AllTransactions from "./pages/tables/AllTransactions";
import Subsciptions from "./pages/tables/Subscriptions";
import Signin from "./pages/examples/Signin";
import Signup from "./pages/examples/Signup";
import ForgotPassword from "./pages/examples/ForgotPassword";
import ResetPassword from "./pages/examples/ResetPassword";
import Lock from "./pages/examples/Lock";
import NotFoundPage from "./pages/examples/NotFound";
import ServerError from "./pages/examples/ServerError";
import Docs from "./pages/Docs";
import Support from "./pages/Support";
import Contacts from "./pages/Contacts";

// user pages
import Teachers from "./pages/users/Teachers";
import Students from "./pages/users/Students";
import Parents from "./pages/users/Parents";
import Legals from "./pages/users/Legals";
import Leads from "./pages/users/Leads";
import SingleStudent from "./pages/SingleStudent";

import DocsOverview from "./pages/documentation/DocsOverview";
import DocsDownload from "./pages/documentation/DocsDownload";
import DocsQuickStart from "./pages/documentation/DocsQuickStart";
import DocsFolderStructure from "./pages/documentation/DocsFolderStructure";
import DocsBuild from "./pages/documentation/DocsBuild";
import DocsChangelog from "./pages/documentation/DocsChangelog";


export const Routes = {
    // pages
    Presentation: { path: "/" },
    DashboardOverview: { path: "/dashboard" },
    Tasks: { path: "/tasks" },
    Groups: { path: "/groups" },
    Courses: { path: "/courses" },
    Access: { path: "/access" },
    News: { path: "/news" },
    ProfileSettings: { path: "/profile-settings" },
    GeneralSettings: { path: "/general-settings" },
    ProductItems: { path: "/products" },
    Upgrade: { path: "/upgrade" },
    AllTransactions: { path: "/finance/all" },
    Subscriptions: { path: "/finance/subscriptions" },
    Billing: { path: "/billing" },
    Invoice: { path: "/invoice" },
    Signin: { path: "/sign-in" },
    Signup: { path: "/sign-up" },
    ForgotPassword: { path: "/forgot-password" },
    ResetPassword: { path: "/reset-password" },
    Lock: { path: "/examples/lock" },
    NotFound: { path: "/error" },
    ServerError: { path: "/server-error" },
    Docs: { path: "/docs" },
    Support: { path: "/support" },
    Contacts: { path: "/contacts" },

    // users
    Teachers: { path: "/users/teachers" },
    Students: { path: "/users/students" },
    SingleStudent: { path: "/users/students/:id" },
    Parents: { path: "/users/parents" },
    Legals: { path: "/users/legals" },
    Leads: { path: "/users/leads" },

    // docs
    DocsOverview: { path: "/documentation/start" },
    DocsDownload: { path: "/documentation/sections" },
    DocsQuickStart: { path: "/documentation/for-admin" },
    DocsLicense: { path: "/documentation/for-teachers" },
    DocsFolderStructure: { path: "/documentation/for-parents" },
    DocsBuild: { path: "/documentation/build-tools" },
    DocsChangelog: { path: "/documentation/changelog" },

};

export const publicRoutes = [
    // pages
    {
        path: "/",
        Component: Presentation
    },

    {
        path: "/sign-in",
        Component: Signin
    },
    {
        path: "/sign-up",
        Component: Signup
    },
    {
        path: "/forgot-password",
        Component: ForgotPassword
    },
    {
        path: "/reset-password",
        Component: ResetPassword
    },
    {
        path: "/examples/lock",
        Component: Lock
    },
    {
        path: "/error",
        Component: NotFoundPage
    },
    {
        path: "/server-error",
        Component: ServerError
    },
    {
        path: "/support",
        Component: Support
    },
    {
        path: "/contacts",
        Component: Contacts
    },
    {
        path: "/docs",
        Component: Docs
    }

];

export const authRoutes = [
    {
        path: "/dashboard",
        Component: DashboardOverview
    },
    {
        path: "/tasks",
        Component: Tasks
    },
    {
        path: "/groups",
        Component: Groups
    },
    {
        path: "/courses",
        Component: Courses
    },
    {
        path: "/access",
        Component: Access
    },
    {
        path: "/news",
        Component: News
    },
    {
        path: "/general-settings",
        Component: GeneralSettings
    },
    {
        path: "/products",
        Component: ProductItems
    },
    {
        path: "/finance/all",
        Component: AllTransactions
    },
    {
        path: "/finance/subscriptions",
        Component: Subsciptions
    },
    {
        path: "/users/students",
        Component: Students
    },
    {
        path: "/users/students/:id",
        Component: SingleStudent
    },
    {
        path: "/users/parents",
        Component: Parents
    },
    {
        path: "/users/legals",
        Component: Legals
    },
    {
        path: "/users/leads",
        Component: Leads
    },
    {
        path: "/profile-settings",
        Component: ProfileSettings
    },
    {
        path: "/users/teachers",
        Component: Teachers
    },
    {
        path: "/documentation/start",
        Component: DocsOverview
    },
    {
        path: "/documentation/sections",
        Component: DocsDownload
    },
    {
        path: "/documentation/for-admin",
        Component: DocsQuickStart
    },
    {
        path: "/documentation/for-parents",
        Component: DocsFolderStructure
    },
    {
        path: "/documentation/for-teachers",
        Component: DocsBuild
    },
    {
        path: "/documentation/changelog",
        Component: DocsChangelog
    },

];