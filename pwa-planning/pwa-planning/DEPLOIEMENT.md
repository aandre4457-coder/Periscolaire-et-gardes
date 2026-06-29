# 📱 Déploiement sur Netlify — Planning Périscolaire

## Contenu du dossier
```
planning-periscolaire/
├── index.html       ← l'application
├── manifest.json    ← config PWA
├── sw.js            ← mode hors ligne
└── icons/
    ├── icon-72.png
    ├── icon-96.png
    ├── icon-128.png
    ├── icon-144.png
    ├── icon-152.png
    ├── icon-192.png
    ├── icon-384.png
    └── icon-512.png
```

---

## 🚀 Déploiement en 5 minutes

### Étape 1 — Créer un compte Netlify
→ https://app.netlify.com/signup (gratuit, avec votre email)

### Étape 2 — Déployer le dossier
1. Allez sur https://app.netlify.com
2. Dans la section **"Sites"**, faites glisser (**drag & drop**) le dossier `planning-periscolaire` directement dans la fenêtre
3. Netlify déploie automatiquement en 30 secondes

### Étape 3 — Votre URL
Netlify vous donne une URL du type :
`https://amazing-name-123456.netlify.app`

Vous pouvez la renommer (optionnel) :
→ Site settings > Domain management > Options > Edit site name

---

## 📲 Installer sur iPhone (iOS)

1. Ouvrez l'URL dans **Safari** (obligatoire, pas Chrome)
2. Appuyez sur le bouton **Partager** (carré avec flèche ↑)
3. Faites défiler et appuyez sur **"Sur l'écran d'accueil"**
4. Nommez l'app **"Périscolaire"** → Ajouter
5. L'icône apparaît sur votre écran d'accueil ✅

---

## 📲 Installer sur Android

1. Ouvrez l'URL dans **Chrome**
2. Une bannière **"Ajouter à l'écran d'accueil"** apparaît automatiquement
   — OU — appuyez sur ⋮ > "Ajouter à l'écran d'accueil"
3. L'icône apparaît sur votre écran d'accueil ✅

---

## 🔄 Mettre à jour l'app

Si vous modifiez le fichier `index.html` :
1. Retournez sur Netlify
2. Faites glisser à nouveau le dossier complet
3. Netlify redéploie automatiquement
4. Sur votre téléphone, l'app se met à jour au prochain démarrage

---

## 💾 Vos données

Les données (gardes sélectionnées, notes, tarifs) sont sauvegardées **localement sur chaque appareil**.
Pour partager entre iPhone et Android, utilisez le bouton **📤 Exporter fichier** dans l'app,
puis **📂 Importer** sur l'autre appareil.
