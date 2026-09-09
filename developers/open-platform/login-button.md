---
url: /developers/open-platform/login-button.md
description: >-
  Multi-platform Login with Ham button components (Vue, React, React Native,
  Android, iOS, HTML/CSS).
---

# Login Button Source Code

This page provides design guidelines, style previews, and multi-platform source code examples for the "Login with Ham" button, helping third-party apps quickly integrate the Ham SSO login entry.

## Design Guidelines

* The button should clearly display the Ham logo and "Login with Ham" text
* Recommended light grey (`#e0e0e0`) as button background, brand blue (`#4478a8`) as text color
* Button opacity reduces to `0.65` on hover and `0.4` on press, with linear transition animation
* Suggested border radius: `12px` with moderate padding
* For icon resources, see the [Brand Assets](/en/developers/open-platform/brand-assets) page

## Style Preview

### Light Theme

### Dark Theme

## Web

Browser-based implementations, including popular frontend framework components and a plain HTML/CSS solution.

### Vue / React Components

Ready-to-use login button components with configurable props like `size` and `dark`. Import directly into your project.

::: code-group

```vue [Vue 3]
<script setup lang="ts">
import { computed, ref } from 'vue'

const props = withDefaults(defineProps<{
  size?: 'small' | 'medium' | 'large'
  dark?: boolean
  authorizeUrl?: string
}>(), {
  size: 'medium',
  dark: false,
})

const emit = defineEmits<{
  click: [event: MouseEvent]
}>()

const sizeConfig = computed(() => {
  const configs = {
    small: { padding: '6px 14px', fontSize: '13px', iconSize: 18, gap: '6px' },
    medium: { padding: '10px 20px', fontSize: '15px', iconSize: 22, gap: '8px' },
    large: { padding: '14px 28px', fontSize: '17px', iconSize: 26, gap: '10px' },
  }
  return configs[props.size]
})

const buttonStyle = computed(() => {
  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: sizeConfig.value.gap,
    padding: sizeConfig.value.padding,
    fontSize: sizeConfig.value.fontSize,
    fontWeight: '500',
    borderRadius: '12px',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
    textDecoration: 'none',
    border: 'none',
  }

  return {
    ...base,
    background: props.dark ? '#2a2a3e' : '#e0e0e0',
    color: props.dark ? '#a8c8e8' : '#4478a8',
  }
})

const isHovering = ref(false)
const isActive = ref(false)

const opacity = computed(() => {
  if (isActive.value) return 0.4
  if (isHovering.value) return 0.65
  return 1
})

function handleClick(event: MouseEvent) {
  emit('click', event)
  if (props.authorizeUrl) {
    window.location.href = props.authorizeUrl
  }
}
</script>

<template>
  <button
    :style="{ ...buttonStyle, opacity, transition: 'opacity 0.2s linear' }"
    @click="handleClick"
    @mouseenter="isHovering = true"
    @mouseleave="isHovering = false; isActive = false"
    @mousedown="isActive = true"
    @mouseup="isActive = false"
  >
    <img
      src="https://your-domain.com/images/icons/ham-icon-64.png"
      :width="sizeConfig.iconSize"
      :height="sizeConfig.iconSize"
      alt="Ham"
      style="border-radius: 4px;"
    />
    <span>Login with Ham</span>
  </button>
</template>
```

```tsx [React]
import React, { CSSProperties, useMemo } from 'react'

interface HamLoginButtonProps {
  size?: 'small' | 'medium' | 'large'
  dark?: boolean
  authorizeUrl?: string
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
}

const sizeConfigs = {
  small: { padding: '6px 14px', fontSize: '13px', iconSize: 18, gap: '6px' },
  medium: { padding: '10px 20px', fontSize: '15px', iconSize: 22, gap: '8px' },
  large: { padding: '14px 28px', fontSize: '17px', iconSize: 26, gap: '10px' },
}

export default function HamLoginButton({
  size = 'medium',
  dark = false,
  authorizeUrl,
  onClick,
}: HamLoginButtonProps) {
  const config = sizeConfigs[size]

  const buttonStyle = useMemo<CSSProperties>(() => {
    const base: CSSProperties = {
      display: 'inline-flex',
      alignItems: 'center',
      gap: config.gap,
      padding: config.padding,
      fontSize: config.fontSize,
      fontWeight: 500,
      borderRadius: '12px',
      cursor: 'pointer',
      transition: 'opacity 0.2s linear',
      textDecoration: 'none',
    }

    return {
      ...base,
      background: dark ? '#2a2a3e' : '#e0e0e0',
      color: dark ? '#a8c8e8' : '#4478a8',
    }
  }, [dark, config])

  const [opacity, setOpacity] = React.useState(1)

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(event)
    if (authorizeUrl) {
      window.location.href = authorizeUrl
    }
  }

  return (
    <button
      style={{ ...buttonStyle, opacity }}
      onClick={handleClick}
      onMouseEnter={() => setOpacity(0.65)}
      onMouseLeave={() => { setOpacity(1) }}
      onMouseDown={() => setOpacity(0.4)}
      onMouseUp={() => setOpacity(0.65)}
    >
      <img
        src="https://your-domain.com/images/icons/ham-icon-64.png"
        width={config.iconSize}
        height={config.iconSize}
        alt="Ham"
        style={{ borderRadius: '4px' }}
      />
      <span>Login with Ham</span>
    </button>
  )
}
```

:::

::: warning Note
Replace the icon URL `https://your-domain.com/images/icons/ham-icon-64.png` with your actual hosted icon address, or download the icon file to your project and use a local path.
:::

### Usage Example

::: code-group

```vue [Vue 3]
<script setup lang="ts">
import HamLoginButton from './HamLoginButton.vue'

const state = crypto.randomUUID()
sessionStorage.setItem('ham_oauth_state', state)

const params = new URLSearchParams({
  client_id: 'your_client_id',
  scope: 'profile,is_student',
  state,
  redirect_uri: 'https://your-app.example.com/callback',
})
const authorizeUrl = `https://ham.nowcent.cn/sso-authorize?${params.toString()}`
</script>

<template>
  <div class="login-page">
    <HamLoginButton :authorize-url="authorizeUrl" />
    <HamLoginButton dark :authorize-url="authorizeUrl" />
  </div>
</template>
```

```tsx [React]
import HamLoginButton from './HamLoginButton'

function LoginPage() {
  const state = crypto.randomUUID()
  sessionStorage.setItem('ham_oauth_state', state)

  const params = new URLSearchParams({
    client_id: 'your_client_id',
    scope: 'profile,is_student',
    state,
    redirect_uri: 'https://your-app.example.com/callback',
  })
  const authorizeUrl = `https://ham.nowcent.cn/sso-authorize?${params.toString()}`

  return (
    <div className="login-page">
      <HamLoginButton authorizeUrl={authorizeUrl} />
      <HamLoginButton dark authorizeUrl={authorizeUrl} />
    </div>
  )
}
```

:::

### Plain HTML/CSS

No framework dependencies — suitable for static pages or lightweight projects.

```html
<a
  href="https://ham.nowcent.cn/sso-authorize?client_id=xxx&scope=profile,is_student&state=yyy&redirect_uri=https%3A%2F%2Fyour-app.example.com%2Fcallback"
  class="ham-login-btn"
>
  <img src="/images/icons/ham-icon-64.png" width="22" height="22" alt="Ham" />
  <span>Login with Ham</span>
</a>

<style>
.ham-login-btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 10px 20px;
  background: #e0e0e0;
  color: #4478a8;
  border: none;
  border-radius: 12px;
  font-size: 15px;
  font-weight: 500;
  text-decoration: none;
  cursor: pointer;
  transition: opacity 0.2s linear;
}
.ham-login-btn:hover { opacity: 0.65; }
.ham-login-btn:active { opacity: 0.4; }
.ham-login-btn img { border-radius: 4px; }
</style>
```

## App (React Native / Android / iOS)

Mobile native implementations covering the cross-platform React Native framework, Android (Jetpack Compose), and iOS (SwiftUI).

::: code-group

```tsx [React Native]
import React from 'react'
import {
  TouchableOpacity, Text, Image, StyleSheet, Linking,
  ViewStyle, TextStyle,
} from 'react-native'

interface HamLoginButtonProps {
  size?: 'small' | 'medium' | 'large'
  authorizeUrl?: string
  onPress?: () => void
}

const sizeConfigs = {
  small: { paddingV: 6, paddingH: 14, fontSize: 13, iconSize: 18, gap: 6 },
  medium: { paddingV: 10, paddingH: 20, fontSize: 15, iconSize: 22, gap: 8 },
  large: { paddingV: 14, paddingH: 28, fontSize: 17, iconSize: 26, gap: 10 },
}

export default function HamLoginButton({
  size = 'medium', authorizeUrl, onPress,
}: HamLoginButtonProps) {
  const config = sizeConfigs[size]

  const handlePress = () => {
    onPress?.()
    if (authorizeUrl) Linking.openURL(authorizeUrl)
  }

  return (
    <TouchableOpacity
      style={[styles.button, {
        paddingVertical: config.paddingV,
        paddingHorizontal: config.paddingH,
        gap: config.gap,
        backgroundColor: '#e0e0e0',
      }]}
      activeOpacity={0.4}
      onPress={handlePress}
    >
      <Image
        source={require('./assets/ham-icon-64.png')}
        style={{ width: config.iconSize, height: config.iconSize, borderRadius: 4 }}
      />
      <Text style={[styles.text, {
        fontSize: config.fontSize,
        color: '#4478a8',
      }]}>
        Login with Ham
      </Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: { flexDirection: 'row', alignItems: 'center', borderRadius: 12 } as ViewStyle,
  text: { fontWeight: '500' } as TextStyle,
})
```

```kotlin [Android (Jetpack Compose)]
import androidx.compose.foundation.Image
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material3.*
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.res.painterResource
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp

private val HamBlue = Color(0xFF4478A8)

@Composable
fun HamLoginButton(
    onClick: () -> Unit,
    modifier: Modifier = Modifier,
) {
    Button(
        onClick = onClick,
        modifier = modifier.height(44.dp),
        shape = RoundedCornerShape(12.dp),
        colors = ButtonDefaults.buttonColors(
            containerColor = Color(0xFFE0E0E0),
            contentColor = HamBlue,
        ),
    ) {
        HamButtonContent(textColor = HamBlue)
    }
}

@Composable
private fun HamButtonContent(textColor: Color = Color.White) {
    Image(
        painter = painterResource(id = R.drawable.ham_icon_64),
        contentDescription = "Ham",
        modifier = Modifier.size(22.dp),
    )
    Spacer(modifier = Modifier.width(8.dp))
    Text(
        text = "Login with Ham",
        fontSize = 15.sp,
        fontWeight = FontWeight.Medium,
        color = textColor,
    )
}


```

```swift [iOS (SwiftUI)]
import SwiftUI

struct HamLoginButton: View {

    enum Size {
        case small, medium, large
        var padding: EdgeInsets {
            switch self {
            case .small:  return EdgeInsets(top: 6, leading: 14, bottom: 6, trailing: 14)
            case .medium: return EdgeInsets(top: 10, leading: 20, bottom: 10, trailing: 20)
            case .large:  return EdgeInsets(top: 14, leading: 28, bottom: 14, trailing: 28)
            }
        }
        var fontSize: CGFloat {
            switch self { case .small: return 13; case .medium: return 15; case .large: return 17 }
        }
        var iconSize: CGFloat {
            switch self { case .small: return 18; case .medium: return 22; case .large: return 26 }
        }
    }

    let size: Size
    let action: () -> Void
    private let hamBlue = Color(red: 0x44/255, green: 0x78/255, blue: 0xa8/255)

    init(size: Size = .medium, action: @escaping () -> Void) {
        self.size = size
        self.action = action
    }

    var body: some View {
        Button(action: action) {
            HStack(spacing: 8) {
                Image("ham-icon-64")
                    .resizable()
                    .frame(width: size.iconSize, height: size.iconSize)
                    .clipShape(RoundedRectangle(cornerRadius: 4))
                Text("Login with Ham")
                    .font(.system(size: size.fontSize, weight: .medium))
            }
            .padding(size.padding)
        }
        .buttonStyle(HamButtonStyle(hamBlue: hamBlue))
    }
}

private struct HamButtonStyle: ButtonStyle {
    let hamBlue: Color

    func makeBody(configuration: Configuration) -> some View {
        configuration.label
            .foregroundColor(hamBlue)
            .background(Color(red: 0xE0/255, green: 0xE0/255, blue: 0xE0/255))
            .cornerRadius(12)
            .opacity(configuration.isPressed ? 0.4 : 1.0)
            .animation(.linear(duration: 0.2), value: configuration.isPressed)
    }
}
```

:::

::: warning Note
Replace the icon URL `https://your-domain.com/images/icons/ham-icon-64.png` with your actual hosted icon address, or download the icon file to your project and use a local path.
:::
