import { Heart, Home, UserRound, Users } from "lucide-react";

export const tripTypes = [
  {
    icon: <UserRound />,
    value: "solo-trip",
    label: "Solo Trip",
  },
  {
    icon: <Heart />,
    value: "partner-trip",
    label: "Partner Trip",
  },
  {
    icon: <Home />,
    value: "family-trip",
    label: "Family Trip",
  },
  {
    icon: <Users />,
    value: "friends-trip",
    label: "Friends Trip",
  },
];