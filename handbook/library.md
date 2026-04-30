---
url: /handbook/library.md
description: How to use Ham for library seat reservations.
---

# Library

You can use Ham to book library seats easily.

## Preparation

Before using the library features, you need:

* Information portal account

### Prepare your information portal account

The library seat reservation system authenticates via the information portal (CAS) single sign-on. You need to set up your information portal account and password in Ham. If you forget your information portal credentials, please reset them on the information portal website.

## Seat map booking

Seat map booking lets you view availability by library, room, and seat, and book directly.

Seat map booking is suitable when:

* You want to go to the library today but have no reservation
* You do not care which room or seat you get

Seat map booking is the first tab in the library section (it was called "Reservation" in older versions).

::: tip Note
Seat map booking does not re-check availability before confirming. If another student books the seat after you select it, Ham will not automatically choose a nearby seat.
:::

## Quick booking

You can save favorite seats and book them directly.

Quick booking is suitable when:

* You often go to the library and prefer a fixed seat
* You need automation booking
* You want to go to a specific room on short notice

After you have booked a seat in Ham or selected a "preferred seat," the quick booking tab appears on the library home page. You can also tap the seat or time to temporarily change the seat and time.

::: tip Note
Quick booking tries to match your preferred seat settings. If the preferred seat fails, Ham will immediately select a nearby seat.
:::

## Preferred seat

The default seat used in quick booking.

You can preselect the time, seat, and preferences. Each time you open the library page, quick booking will use your settings.

Preferred seat settings are in "Library Settings."

## Reservation status

When Ham finds an active reservation, it will be shown on the library home page and the status page.

You can change the reservation time or cancel it from the status card.

If you booked a long session and need to leave for a while (longer than the library allows), you can change the reservation time before leaving so you can keep the seat when you return.

After Ham fetches your reservation status, it automatically adds the event to the system calendar and reminds you 10 minutes before entry. (iOS)

Reservation status supports Dynamic Island and LiveActivity. Active reservations will be pinned in the notification area, showing the seat number, location, and time. (iOS)

## History

You can view your library reservation history.

## Widgets

You can place a widget on the home screen to remind you of the reservation location and time, or your temporary leave time.

You can set the widget refresh interval, but if it is too frequent, it may trigger a temporary library ban (15 minutes is generally recommended).

## Other library settings

### Update base data

Generally, when you enter the reservation page, Ham uses local room data to reduce network requests and speed up booking. Each time you enter "Library," Ham tries to update the base data.

* Update from the library system

This option logs in to the library system on the device to fetch base data.

### Reset

If the library feature behaves abnormally, tap "Reset."

### Automation (Android)

First, set your preferred seat in Ham. Automation settings are in "Me" -> "Automation." After enabling it, Ham will book the preferred seat at the scheduled time. It uses the system time to decide whether to book for tomorrow.

### Automation (iOS)

First, set your preferred seat in Ham, then create a Personal Automation in Shortcuts: select a time, add the action "App" -> "Ham" -> "Quick book library," and disable "Ask Before Running." Ham will then book your preferred seat at the scheduled time. It uses the system time to decide whether to book for tomorrow.

### Dynamic Island / LiveActivity

Eligible reservations will appear on the Dynamic Island at the appropriate time.

## Required permissions

### Automation

* Android: Auto-start

### Widgets

* Android: Auto-start
