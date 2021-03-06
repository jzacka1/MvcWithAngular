
USE [TestDb]
GO
/****** Object:  Table [dbo].[Company]    Script Date: 8/21/2020 9:25:55 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Company](
	[CompanyID] [int] IDENTITY(1,1) NOT NULL,
	[CompanyName] [nvarchar](50) NOT NULL,
	[HQState] [nvarchar](2) NOT NULL,
 CONSTRAINT [PK_Company] PRIMARY KEY CLUSTERED 
(
	[CompanyID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Employee]    Script Date: 8/21/2020 9:25:55 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Employee](
	[EmployeeID] [int] IDENTITY(1,1) NOT NULL,
	[FirstName] [nvarchar](max) NOT NULL,
	[LastName] [nvarchar](max) NOT NULL,
	[BirthDate] [datetime] NOT NULL,
	[HomeState] [nvarchar](2) NOT NULL,
	[Gender] [nchar](10) NOT NULL,
 CONSTRAINT [PK_Employee] PRIMARY KEY CLUSTERED 
(
	[EmployeeID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Employment]    Script Date: 8/21/2020 9:25:55 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Employment](
	[EmploymentID] [int] IDENTITY(1,1) NOT NULL,
	[CompanyID] [int] NOT NULL,
	[EmployeeID] [int] NOT NULL,
	[EmploymentStartDate] [date] NOT NULL,
	[EmploymentEndDate] [date] NULL,
 CONSTRAINT [PK_Employment] PRIMARY KEY CLUSTERED 
(
	[EmploymentID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Plan]    Script Date: 8/21/2020 9:25:55 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Plan](
	[PlanID] [int] IDENTITY(1,1) NOT NULL,
	[PlanType] [nvarchar](50) NOT NULL,
	[PlanName] [nvarchar](50) NOT NULL,
 CONSTRAINT [PK_Plan] PRIMARY KEY CLUSTERED 
(
	[PlanID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[PlanEnrollment]    Script Date: 8/21/2020 9:25:55 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[PlanEnrollment](
	[EnrollmentID] [int] IDENTITY(1,1) NOT NULL,
	[EmployeeID] [int] NOT NULL,
	[PlanID] [int] NOT NULL,
	[EnrollmentStartDate] [datetime] NOT NULL,
	[EnrollmentEndDate] [datetime] NOT NULL,
 CONSTRAINT [PK_PlanEnrollment] PRIMARY KEY CLUSTERED 
(
	[EnrollmentID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[tbl_Customers]    Script Date: 8/21/2020 9:25:55 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[tbl_Customers](
	[CustomerID] [int] IDENTITY(1,1) NOT NULL,
	[Name] [nvarchar](50) NOT NULL,
	[Gender] [nchar](10) NOT NULL,
 CONSTRAINT [PK_tbl_Customers] PRIMARY KEY CLUSTERED 
(
	[CustomerID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
SET IDENTITY_INSERT [dbo].[Company] ON 

INSERT [dbo].[Company] ([CompanyID], [CompanyName], [HQState]) VALUES (1, N'Steve''s Widgets Inc', N'FL')
INSERT [dbo].[Company] ([CompanyID], [CompanyName], [HQState]) VALUES (2, N'Spigots and More LLC', N'NY')
INSERT [dbo].[Company] ([CompanyID], [CompanyName], [HQState]) VALUES (3, N'Maria''s Bakery', N'CA')
SET IDENTITY_INSERT [dbo].[Company] OFF
SET IDENTITY_INSERT [dbo].[Employee] ON 

INSERT [dbo].[Employee] ([EmployeeID], [FirstName], [LastName], [BirthDate], [HomeState], [Gender]) VALUES (1, N'John', N'Doe', CAST(N'1978-01-01T00:00:00.000' AS DateTime), N'FL', N'M         ')
INSERT [dbo].[Employee] ([EmployeeID], [FirstName], [LastName], [BirthDate], [HomeState], [Gender]) VALUES (2, N'Jane', N'Eyre', CAST(N'1985-04-07T00:00:00.000' AS DateTime), N'AL', N'F         ')
INSERT [dbo].[Employee] ([EmployeeID], [FirstName], [LastName], [BirthDate], [HomeState], [Gender]) VALUES (3, N'Alexander', N'Hamilton', CAST(N'1960-06-04T00:00:00.000' AS DateTime), N'NY', N'M         ')
INSERT [dbo].[Employee] ([EmployeeID], [FirstName], [LastName], [BirthDate], [HomeState], [Gender]) VALUES (4, N'Chris', N'Smith', CAST(N'1990-12-05T00:00:00.000' AS DateTime), N'CA', N'M         ')
INSERT [dbo].[Employee] ([EmployeeID], [FirstName], [LastName], [BirthDate], [HomeState], [Gender]) VALUES (5, N'Emily', N'Dickinson', CAST(N'1945-03-05T00:00:00.000' AS DateTime), N'VT', N'F         ')
SET IDENTITY_INSERT [dbo].[Employee] OFF
SET IDENTITY_INSERT [dbo].[Employment] ON 

INSERT [dbo].[Employment] ([EmploymentID], [CompanyID], [EmployeeID], [EmploymentStartDate], [EmploymentEndDate]) VALUES (1, 1, 1, CAST(N'2000-01-01' AS Date), NULL)
INSERT [dbo].[Employment] ([EmploymentID], [CompanyID], [EmployeeID], [EmploymentStartDate], [EmploymentEndDate]) VALUES (2, 1, 2, CAST(N'2019-04-01' AS Date), CAST(N'2015-05-01' AS Date))
INSERT [dbo].[Employment] ([EmploymentID], [CompanyID], [EmployeeID], [EmploymentStartDate], [EmploymentEndDate]) VALUES (3, 1, 3, CAST(N'2015-05-01' AS Date), NULL)
INSERT [dbo].[Employment] ([EmploymentID], [CompanyID], [EmployeeID], [EmploymentStartDate], [EmploymentEndDate]) VALUES (4, 2, 4, CAST(N'2009-03-06' AS Date), CAST(N'2015-07-01' AS Date))
INSERT [dbo].[Employment] ([EmploymentID], [CompanyID], [EmployeeID], [EmploymentStartDate], [EmploymentEndDate]) VALUES (5, 3, 5, CAST(N'2002-02-01' AS Date), NULL)
SET IDENTITY_INSERT [dbo].[Employment] OFF
SET IDENTITY_INSERT [dbo].[Plan] ON 

INSERT [dbo].[Plan] ([PlanID], [PlanType], [PlanName]) VALUES (1, N'Medical', N'Medical Plan 1')
INSERT [dbo].[Plan] ([PlanID], [PlanType], [PlanName]) VALUES (2, N'Dental', N'Dental Plan 1')
INSERT [dbo].[Plan] ([PlanID], [PlanType], [PlanName]) VALUES (3, N'Vision', N'Plan 1')
INSERT [dbo].[Plan] ([PlanID], [PlanType], [PlanName]) VALUES (4, N'Medical', N'Medical Plan 2')
INSERT [dbo].[Plan] ([PlanID], [PlanType], [PlanName]) VALUES (5, N'flat', N'flat plan1')
SET IDENTITY_INSERT [dbo].[Plan] OFF
SET IDENTITY_INSERT [dbo].[tbl_Customers] ON 

INSERT [dbo].[tbl_Customers] ([CustomerID], [Name], [Gender]) VALUES (1, N'James Zacka', N'M         ')
INSERT [dbo].[tbl_Customers] ([CustomerID], [Name], [Gender]) VALUES (2, N'Bobby Fisher', N'M         ')
INSERT [dbo].[tbl_Customers] ([CustomerID], [Name], [Gender]) VALUES (3, N'Steven Universe', N'M         ')
SET IDENTITY_INSERT [dbo].[tbl_Customers] OFF
ALTER TABLE [dbo].[PlanEnrollment]  WITH CHECK ADD  CONSTRAINT [FK_PlanEnrollment_Employee] FOREIGN KEY([EmployeeID])
REFERENCES [dbo].[Employee] ([EmployeeID])
GO
ALTER TABLE [dbo].[PlanEnrollment] CHECK CONSTRAINT [FK_PlanEnrollment_Employee]
GO
ALTER TABLE [dbo].[PlanEnrollment]  WITH CHECK ADD  CONSTRAINT [FK_PlanEnrollment_Plan] FOREIGN KEY([PlanID])
REFERENCES [dbo].[Plan] ([PlanID])
GO
ALTER TABLE [dbo].[PlanEnrollment] CHECK CONSTRAINT [FK_PlanEnrollment_Plan]
GO
