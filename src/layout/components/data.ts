export default [
  {
    name: "组织管理",
    component: "organization",
    id: "organization",
    icon: "",
    hidden: false,
    isActive: true,
    children: [
      {
        name: "用户管理",
        path: "/personal",
        component: "personal",
        id: "personal",
        icon: "",
        hidden: false,
        isActive: true,
        children: []
      },
      {
        name: "平台注册",
        path: "/registry",
        component: "registry",
        id: "registry",
        icon: "",
        hidden: false,
        isActive: true
      },
      {
        name: "机构管理",
        path: "/org",
        component: "org",
        id: "org",
        icon: "",
        hidden: false,
        isActive: true,
        children: []
      },
      {
        name: "人员信息",
        path: "/personnelInformation",
        component: "personnelInformation",
        id: "personnelInformation",
        icon: "",
        hidden: false,
        isActive: true,
        children: []
      }
    ]
  },
  {
    name: "业务管理",
    component: "inmAnagEment",
    id: "inmAnagEment",
    icon: "",
    hidden: false,
    isActive: true,
    children: [
      {
        name: "题库管理",
        path: "/Itebankent",
        component: "Itebankent",
        id: "Itebankent",
        icon: "",
        hidden: false,
        isActive: true
      },
      {
        name: "测评结果",
        path: "/Evaluatiouery",
        component: "Evaluatiouery",
        id: "Evaluatiouery",
        icon: "",
        hidden: false,
        isActive: true
      },
      {
        name: "工单管理",
        path: "/workOrder",
        component: "workOrder",
        id: "workOrder",
        icon: "",
        hidden: false,
        isActive: true
      },
      {
        name: "脚本设置",
        path: "/settings",
        component: "settings",
        id: "settings",
        icon: "",
        hidden: false,
        isActive: true
      }
    ]
  },
  {
    name: "综合管理",
    component: "comprehensive",
    id: "comprehensive",
    icon: "",
    hidden: false,
    isActive: true,
    children: [
      {
        name: "权限管理",
        path: "/manager",
        component: "manager",
        id: "manager",
        icon: "",
        hidden: false,
        isActive: true,
        children: []
      },
      {
        name: "角色管理",
        path: "/role",
        component: "role",
        id: "role",
        icon: "",
        hidden: false,
        isActive: true,
        children: []
      },
      {
        name: "字典管理",
        path: "/dict",
        component: "dict",
        id: "dict",
        icon: "",
        hidden: false,
        isActive: true,
        children: []
      }
    ]
  }
];
