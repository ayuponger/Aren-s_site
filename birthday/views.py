from django.shortcuts import render

# ─────────────────────────────────────────────────────────────
# 🎂  EDIT NAMES, MESSAGES & QUOTES BELOW
# ─────────────────────────────────────────────────────────────
CONTEXT = {
    "person_name": "Sentiren",
    "tagline": "The youngest daughter — bright, loved, and adored by all.",
    "hero_message": "SENTIREN",
    "hero_sub": "A day for the one who lights up every room she walks into.",
    "story_paragraphs": [
        "Some people simply exist. And some people glow — they bring colour, "
        "warmth and laughter wherever they go. Sentiren, you are the second kind.",
        "As the youngest of the family, you grew up surrounded by love — and "
        "somehow, you returned it tenfold. Today isn't just another day- its a "
        "celebration for you, the one that brings light into every life around you...!",
    ],
    "quotes": [
        {
            "text": "You've always been the most caring and understanding one in the family, "
                    "and i'm so grateful to have you not just as my sister,but also as my"
                    "best friend.I'll always be there for you no matter what. "
                    "Happiest birthday, Aren 🎉",
            "author": "Sis Achet",
            "image": "loved1.jpg",
        },
        {
            "text": "From the day you were born, you turned our house into a home. "
                    "Wishing you a year as bright as your smile.",
            "author": "Sis Asen",
            "image": "loved2.jpg",
        },
        {
            "text": "My favourite chaos, my favourite person. "
                    "May this year spoil you the way you spoil us with love.",
            "author": "Akev Achung",
            "image": "loved3.jpg",
        },
        {
            "text": "You are proof that the best things really do come last. "
                    "Happiest birthday, Aren.",
            "author": "Akev Wapang",
            "image": "loved4.jpg",
        },
        {
            "text": "Happiest Birthday Aren!...."
                    "From all of us- you're not just one of us, you're the heart of us ."
                    "Wishing you a day as special as the joy you bring to everyone around you...",
            "author": "Submarine Group",
            "image": "loved5.jpg",
        },
    ],
    "images": [f"image{i}.jpg" for i in range(1, 7)],
    "videos": [f"video{i}.mp4" for i in range(1, 5)],
}


def index(request):
    return render(request, 'birthday/index.html', CONTEXT)
