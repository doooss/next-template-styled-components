# 2022-03 Next.js fontawesome template

this template is my custom template based on create next app, eslint, prettier + fontAweSome

each branch is configured with its own settings

---

### Installation

```bash
$ git clone https://github.com/ldy9212/template
```
---

### Main Branch

Main branch's setting is prettier + eslint + styled-components + fonts

fonts 
- Roboto (English + Special Characters)
- Google Font Noto Sans (Korean)  

---

### How to use fontAweSome Componets

FontAwesomeIcon lib have FontAwesomeIcon Component

>usage example solid star ★

```ts
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

<FontAwesomeIcon icon={faStar} />
```

> usage example regular star ☆

```ts
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-regular-svg-icons';

<FontAwesomeIcon icon={faStar} />
```


