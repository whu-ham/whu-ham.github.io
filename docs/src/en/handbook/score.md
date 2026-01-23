# Grades
You can use Ham to view your course grades, calculate your GPA or comprehensive evaluation score, and check grade distributions.

## Comprehensive evaluation score types
Different schools use different calculation methods. Ham automatically identifies general education, public, required, elective, and cross-major courses and calculates the score accordingly.

Ham provides two calculation methods depending on the school:
> B1: Required and general education course grades
>
> B2: Elective and cross-major course grades

### New F2 calculation
Formula:
```
F2 = B1 + B2 x 0.002
Where: B2 uses up to 8 courses
```
Under this method, Ham selects up to 8 electives with the highest F2 contribution.

You can tap "Select" to see which elective grades were chosen. Or long press to manually choose grades for the comprehensive score.

If you do not want a course included, you can enable or disable it in "Grade Settings" -> "Edit grade inclusion."

Schools currently using this method:
- School of Computer Science

### Legacy F2 calculation
Formula:
```
F2 = B1 x 0.98 + B2 x 0.02
```
Schools currently using this method:
- School of Resource and Environmental Science

### Calculate with JavaScript
Ham supports custom JavaScript scripts for comprehensive score calculations. In "Grades" -> "Settings" -> "Select calculation method," you can choose scripts shared by other users.

Shared scripts come from:

- Built-in scripts
- [Github](https://github.com/whu-ham/ScoreCalculator)

## Credits and GPA
Tap "Select" to enter custom selection mode. You can choose courses freely to calculate credits or GPA.

~~To avoid miscalculations (for example, a course is not counted for credits in the curriculum), Ham did not provide multi-select. You must verify each course's credit value to ensure the GPA matches the school's calculation.~~

Ham now supports multi-select grades, but you still need to verify each course's credits.

## Security and biometrics
To prevent others from seeing your grades, biometrics are enabled by default. You must pass biometric authentication (Face ID, fingerprint, etc.) to view grades.

If you find this too cumbersome, you can disable it in settings.

## Grade distribution
You can use Ham to check grade distributions for courses.

### Before using
To use grade distribution, you must:
- Have retrieved your grades
- Agree to upload anonymous grades to Ham's server

Ham de-identifies uploaded data. Your student ID is not sent directly; a hashed identifier is used instead. Therefore, your grades cannot be directly tied to you on the server.

Every time you open "Grade Distribution," Ham uploads your grades to the server to provide references for other users.

You can refuse the upload, but then you cannot use grade distribution.

### Search grade distribution
Enter a course name or instructor name to query a specific course or instructor.

You do not need to type the full course name. For example, for "Mao Zedong Thought and the Theoretical System of Socialism with Chinese Characteristics," entering "Mao" is enough.

### Course reviews
You can post anonymous reviews for courses you have taken. After posting, other students can see your comments and ratings.

You can only view others' reviews after you have posted your own.

### Want to take
If you are interested in a course, tap "Want to take" on the course details page.

## Required permissions
### Biometrics
- iOS: Face ID
- Android: Device passcode enabled (not a permission, but required)
