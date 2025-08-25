# Database Diagram Specifications

### Legend

- 🔑 Primary Key
- 🔗 Foreign Key

### Database Table Definitions

## Users

**user_groups**

| Column Name | Data Type    | Key | Required | Description            |
| ----------- | ------------ | --- | -------- | ---------------------- |
| id 🔑       | int          | PK  | ✅       | Primary key            |
| name        | varchar(255) |     | ✅       | Name of the user group |

**users**

| Column Name      | Data Type     | Key | Required | Description                                        |
| ---------------- | ------------- | --- | -------- | -------------------------------------------------- |
| id 🔑            | int           | PK  | ✅       | Primary key                                        |
| name             | varchar(255)  |     | ✅       | Name of the user                                   |
| password_hash    | varchar(255)  |     | ✅       | Password of the user hashed                        |
| email            | varchar(255)  |     | ✅       | Email of the user                                  |
| user_group_id 🔗 | int           | FK  | ✅       | [user_groups](#user-groups) id                     |
| is_group_admin   | boolean       |     | ✅       | Whether the user has access to other user profiles |
| income           | decimal(10,2) |     | ❌       | Gross income of the user                           |

## Policies

**coverage_categories**

| Column Name        | Data Type    | Key | Required | Description                                                          |
| ------------------ | ------------ | --- | -------- | -------------------------------------------------------------------- |
| id 🔑              | int          | PK  | ✅       | Primary key                                                          |
| name               | varchar(255) |     | ✅       | Coverage type (e.g. Accident, Hospitalization, Death, Critical Ill.) |
| color_config_id 🔗 | int          | FK  | ✅       | [color_configs](#color-configs) id                                   |

**policies**

| Column Name | Data Type    | Key | Required | Description                                |
| ----------- | ------------ | --- | -------- | ------------------------------------------ |
| id 🔑       | int          | PK  | ✅       | Primary key                                |
| name        | varchar(255) |     | ✅       | Policy name                                |
| type        | varchar(50)  |     | ✅       | Type of policy (coverage, savings, invest) |

**coverage_policies**

| Column Name   | Data Type | Key | Required | Description                                              |
| ------------- | --------- | --- | -------- | -------------------------------------------------------- |
| id 🔑         | int       | PK  | ✅       | Primary key                                              |
| categories_id | int[]     | FK  | ✅       | Array of [coverage_categories](#coverage-categories) ids |

**savings_policies**

| Column Name | Data Type | Key | Required | Description |
| ----------- | --------- | --- | -------- | ----------- |
| id 🔑       | int       | PK  | ✅       | Primary key |

**investment_policies**

| Column Name | Data Type | Key | Required | Description |
| ----------- | --------- | --- | -------- | ----------- |
| id 🔑       | int       | PK  | ✅       | Primary key |

**user_coverages**

| Column Name           | Data Type | Key | Required | Description                                |
| --------------------- | --------- | --- | -------- | ------------------------------------------ |
| id 🔑                 | int       | PK  | ✅       | Primary key                                |
| coverage_policy_id 🔗 | int       | FK  | ✅       | [coverage_policies](#coverage-policies) id |
| user_id 🔗            | int       | FK  | ✅       | [users](#users) id                         |
| metadata              | JSONB     |     | ❌       | Extra config / attributes                  |

**user_savings**

| Column Name          | Data Type | Key | Required | Description                              |
| -------------------- | --------- | --- | -------- | ---------------------------------------- |
| id 🔑                | int       | PK  | ✅       | Primary key                              |
| savings_policy_id 🔗 | int       | FK  | ✅       | [savings_policies](#savings-policies) id |
| user_id 🔗           | int       | FK  | ✅       | [users](#users) id                       |
| metadata             | JSONB     |     | ❌       | Extra config / attributes                |

**user_investments**

| Column Name             | Data Type | Key | Required | Description                                    |
| ----------------------- | --------- | --- | -------- | ---------------------------------------------- |
| id 🔑                   | int       | PK  | ✅       | Primary key                                    |
| investment_policy_id 🔗 | int       | FK  | ✅       | [investment_policies](#investment-policies) id |
| user_id 🔗              | int       | FK  | ✅       | [users](#users) id                             |
| metadata                | JSONB     |     | ❌       | Extra config / attributes                      |

## Configurations

**color_configs**

| Column Name     | Data Type    | Key | Required | Description                      |
| --------------- | ------------ | --- | -------- | -------------------------------- |
| id 🔑           | int          | PK  | ✅       | Primary key                      |
| name            | varchar(255) |     | ✅       | Color theme name                 |
| bg_color        | varchar(10)  |     | ❌       | Background color (hex)           |
| text_color      | varchar(10)  |     | ❌       | Text color (hex)                 |
| bg_color_dark   | varchar(10)  |     | ❌       | Dark mode background color (hex) |
| text_color_dark | varchar(10)  |     | ❌       | Dark mode text color (hex)       |

**user_gantt_configs**

| Column Name | Data Type | Key | Required | Description |
| ----------- | --------- | --- | -------- | ----------- |
| id 🔑       | int       | PK  | ✅       | Primary key |

**user_timeline_configs**

| Column Name | Data Type    | Key | Required | Description            |
| ----------- | ------------ | --- | -------- | ---------------------- |
| id 🔑       | int          | PK  | ✅       | Primary key            |
| name        | varchar(255) |     | ✅       | Timeline configuration |
