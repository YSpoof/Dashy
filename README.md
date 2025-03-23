# Dashy

Dashy is a modern, customizable start page that combines a clean interface with powerful search and customization.

Access the app: [https://dashy.lzart.com.br](https://dashy.lzart.com.br)

## Key Features
- **Fast**: It uses a serviceWorker to cache needed stuff.
- **Personalized Background**: Set any image link as your background
- **Profile Picture**: Add a personal avatar
- **Date & Time**: Always see the current date and time
- **Smart Search**: Integrated with [Banger](https://banger.lzart.com.br) for quick commands
- **Responsive Design**: Optimized for various devices

## Usage

### Search

- Enter regular search queries
- Use [Banger](https://banger.lzart.com.br) bangs (e.g., `!gg` for Google, `!yt` for YouTube and many more)

### Customization

1. Right-click or double-click on an empty area to open customization
2. Adjust the background and profile image
3. Toggle UI elements as needed
4. Save or share the generated URL for reuse

## Development

### Prerequisites

- Node.js (v20+)
- Angular CLI
- Bun package manager

### Setup

```bash
git clone https://github.com/yspoof/dashy.git
cd dashy
bun install
bun run dev