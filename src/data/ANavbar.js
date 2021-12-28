const Data = [
  [
    { path: "/dashboard", name: "Home", icon: "fas fa-home" },
    { path: "/pay-fee", name: "Pay Fee", icon: "fas fa-dollar-sign" },
  ],

  [
    {
      name: "Education",
      icon: "fas fa-graduation-cap",
      data: [
        { name: "Course Registration", path: "/course-registration" },
        { name: "Form B", path: "/form-b" },
        { name: "CA Result", path: "/ca-result" },
        { name: "Final Result", path: "/final-result" },
      ],
    },

    {
      name: "Account",
      icon: "fas fa-user",
      data: [
        { name: "Info", path: "/info" },
        { name: "Admission Letter", path: "/admission-letter" },
        { name: "Transactions", path: "/transactions" },
        { name: "Change Profile Photo", path: "/change-profile-photo" },
        { name: "Change Password", path: "/current-password" },
        // { name: "Logout", path: "/logout" },
      ],
    },
  ],
];
export default Data;
