import {
  AcademicCapIcon,
  ClipboardListIcon,
  CogIcon,
  HomeIcon,
  LibraryIcon,
  LogoutIcon,
  NewspaperIcon,
  UserCircleIcon,
  UserGroupIcon,
  UsersIcon,
} from "@heroicons/react/outline";

export const navigation = [
  { name: "Home", path: "/", icon: HomeIcon },
  { name: "Team", path: "/team", icon: UserGroupIcon },
  { name: "Training", path: "/training", icon: AcademicCapIcon },
  { name: "Matches", path: "/matches", icon: ClipboardListIcon },
  { name: "Club", path: "/club", icon: LibraryIcon },
  { name: "Staff", path: "/staff", icon: UsersIcon },
  { name: "Social", path: "/social", icon: NewspaperIcon },
];
export const profile = [
  { name: "Your Profile", path: "/profile", icon: UserCircleIcon },
  { name: "Settings", path: "/settings", icon: CogIcon },
  { name: "Sign out", path: "/sign-out", icon: LogoutIcon },
];
