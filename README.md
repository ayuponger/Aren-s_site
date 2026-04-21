# 🎉 Happy Birthday Sentiren— Django Website

A fully animated, scrollable, interactive birthday website built with Django.

## ✨ Features

- 🎂 Animated cinematic hero with floating petals & confetti
- 📜 Smooth scroll reveal animations (Intersection Observer)
- 🖼️ 6 image placeholders (gallery + parallax sections)
- 🎬 4 video placeholders
- 💬 5 quote cards from loved ones with their photos
- 🎨 Blush & Lavender palette + Cormorant Garamond / Karla typography
- 💫 Parallax, particle background, animated cake, music toggle
- 📱 Fully responsive

## 🚀 Quick Start

```bash
# 1. Create virtual environment
python -m venv venv
source venv/bin/activate          # Mac/Linux
venv\Scripts\activate             # Windows

# 2. Install Django
pip install -r requirements.txt

# 3. Run migrations (optional — no DB needed for the site itself)
python manage.py migrate

# 4. Start the server
python manage.py runserver

# 5. Open http://127.0.0.1:8000
```

## 🖼️ Adding YOUR Images & Videos

Replace the placeholder files inside **`birthday/static/birthday/media/`**.

Keep the **exact same filenames** — the site is already wired to them:

### Images (6 total)
| Slot | Filename | Where it appears |
|------|----------|------------------|
| 1 | `image1.jpg` | Hero portrait (top of page) |
| 2 | `image2.jpg` | Story section — "Beginnings" |
| 3 | `image3.jpg` | Parallax mid-banner |
| 4 | `image4.jpg` | Gallery card |
| 5 | `image5.jpg` | Gallery card |
| 6 | `image6.jpg` | Closing montage |

### Videos (4 total)
| Slot | Filename | Where it appears |
|------|----------|------------------|
| 1 | `video1.mp4` | Memories section — clip 1 |
| 2 | `video2.mp4` | Memories section — clip 2 |
| 3 | `video3.mp4` | Memories section — clip 3 |
| 4 | `video4.mp4` | Memories section — clip 4 |

### Loved-ones photos (5 — used inside the quote cards)
Filenames: `loved1.jpg`, `loved2.jpg`, `loved3.jpg`, `loved4.jpg`, `loved5.jpg`

> 💡 **Tip**: Use roughly 1200×800 px JPGs for images and MP4 for videos.
> If a file is missing, the page still loads — you'll just see an empty frame.

## ✏️ Editing names, quotes & messages

Open **`birthday/views.py`** — at the top you'll find a clearly-labeled
`CONTEXT` dict with the birthday person's name, the 5 quotes, and author
names. Edit freely; the template auto-updates.

## 📁 Structure

```
santoshi_birthday/
├── manage.py
├── requirements.txt
├── birthday_project/        # Django project (settings, urls, wsgi)
└── birthday/                # The app
    ├── views.py             # ← edit names + quotes here
    ├── urls.py
    ├── templates/birthday/index.html
    └── static/birthday/
        ├── css/style.css
        ├── js/main.js
        └── media/           # ← drop YOUR photos & videos here
```

Made with 💜 for Sentiren— the brightest, most adored youngest daughter.
