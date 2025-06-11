🧠 Quiz Game App – React Native (Expo)

Interaktyvus mobilusis quiz žaidimas sukurtas naudojant React Native, Expo ir Clerk autentifikaciją. Vartotojas atsako į klausimus, turi gyvybes, mato progresą, o laimėjęs – gauna pergalės modalą su GIF animacija. Po to gali žaisti papildomą dėlionės mini-žaidimą.
🧩 Funkcijos

    ✅ Prisijungimas su Clerk (naudojant el. paštą)

    ❓ Klausimų sistema: kelių atsakymų ir atviro tipo klausimai

    ❤️ Gyvybių sistema: startuoja su 5 gyvybėmis

    📊 Progreso sekimas per HeaderComponent

    🎉 Pergalės ekranas su animuotu GIF ir mygtuku žaidimui iš naujo

    🧩 Papildomas dėlionės žaidimas prieinamas per mygtuką

    🔊 (galima pridėti garsus ateityje)

    | Prisijungęs vartotojas               | Klausimas                            | Pergalės GIF                                                                                                          |

| ![User](https://i.imgur.com/XYZ.png) | ![Quiz](https://i.imgur.com/XYZ.png) | ![Victory](https://res.cloudinary.com/dmzg0apbj/image/upload/v1749667998/4a7f016fd2be93486537189c59264c0f_pdd1oz.gif) |

🔧 Naudotos technologijos

    React Native

    Expo

    TypeScript

    Clerk – autentifikacijai

    react-native-safe-area-context, expo-router, react-native-modal ir kt.

    LANGREV/

├── app/
│ ├── (auth)/ # Clerk autentifikacija
│ ├── \_layout.tsx # Pagrindinis maršrutizavimas
│ ├── index.tsx # Pradinis ekranas (klausimai)
│ ├── MultipleChoiceQuestion.tsx
│ ├── puzzle.tsx # Dėlionės mini žaidimas
│ ├── +html.tsx # Clerk WebView pagalbinis failas
│
├── assets/
│ ├── data/
│ │ └── AllQuestionsData.ts # Klausimų masyvas
│ ├── puzzle.jpg # Paveikslėlis dėlionei
│ ├── logo.png, splash.png... # Kiti UI paveikslėliai
│
├── components/
│ ├── HeaderComponent.tsx
│ ├── VictoryModal.tsx
│ ├── SignOutButton.tsx
│ ├── ProgressBar.tsx
│ ├── Multiple UI komponentai (Button, Container, ImageOption ir kt.)
│
├── utils/
│ └── ... pagalbinės funkcijos

🛠️ Naudojamos technologijos

    React Native

    Expo

    Clerk.dev – autentifikacijai

    expo-router, react-native-safe-area-context, react-native-modal ir kiti UI bei animacijų moduliai
