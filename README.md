---
title: SubtitleX v1.0 White Paper
date: 2024-06-25 11:02:22
tags: 
categories:
---

{% asset_img promption-1400X560.png SubtitleX %}


# SubtitleX v1.0 White Paper

## Product Description
1. **Subtitle Provision**: Provides subtitles for online videos.
2. **Auto Load Subtitles**: Automatically loads subtitles for collected online videos via a [Chrome browser extension]().
3. **Subtitle Library Search**: Allows searching a library of subtitles for over 30,000 online videos via a [web application]().
4. **Subtitle Upload and Sharing**: Enables users to upload and share subtitles, marked with the video or video page URL, with other users.
5. **Subtitle Generation**: Generates subtitles for uncollected videos using the Fast-Whisper v3 large model, and translates them into various languages using the Google Translate API.

## Applications
1. **[Chrome Extension](https://chromewebstore.google.com/detail/subtitlex/jleagfpeiplocfdkajcpgcadnpipmkcl)**
2. **[Web Application](https://www.subtitlex.xyz)**
3. **[Subscription System](https://www.subtitlex.xyz/Member)**
4. **Crawling Tool**
5. **Download-Transcribe-Translate Tool**

## Technology Stack
### Front End
- React
- Next.js, Prisma, Next-Auth
- Chrome Extension
- TailwindCSS, Material-UI

### Back End
- Golang (Gin)

### Database
- PostgreSQL
- TSDB
- Redis

### Utility
- **Crawling**: BeautifulSoup4, Selenium
- Streaming Download: Stream-Link
- STT: Faster-Whisper

## Resources Used
1. **Web Application**: Vercel, Supabase
2. **Server**: Self-hosted (4 cores, x86 with RedHat)
3. **Connection**: Cloudflare DNS and Zero Trust Tunnel
4. **API**: Google Translate API
5. **Icons**: 
   - [icon.ray.so](https://icon.ray.so/)
   - [icons8.com](https://icons8.com/)
6. **Free GPU**: Google Colab
7. **Payment**: Stripe

### Programming and Testing
- **Laptop**: ThinkPad T14 with Ryzen 5 4650U, 12 cores with built-in GPU, 32GB RAM
- **Desktop Workstation**: Ryzen 5 5600, 12 cores with RTX 2060 Super GPU, 16GB RAM

## Promotion
1. Google Search
2. [Twitter](https://x.com/subtitlex_xyz)

## Attention Please
1. This tool is designed to work with a variety of online streaming websites. However, some content in the library is adapted for websites that contain mature content, so this tool may include links to adult content websites.
2. All functions are built using open technology and open-source programs. The copyright of content on third-party websites is not accounted for.

## Source Code
- Web application: https://github.com/zw3413/subtitlex_vercel
- Backend API / Scrawling / STT :  https://github.com/zw3413/subtitles