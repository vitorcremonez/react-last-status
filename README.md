## This package is under development... Come back soon!

## React Last Status Component

React component that shows the last status of user.
Add your own last seen status to your project.

| elapsed time | status output | props | default | 
| :---: | :---: | :---: | :---: |
| max last `limiarOnline` ms | online | online | `online` |
| max same day | today at 00:00 | today | `today at HH:mm` |
| max 1 day ago | yesterday at 00:00 | yesterday | `yesterday at HH:mm` |
| max 1 week ago | sunday at 00:00 | lastWeek | `WW at HH:mm` |
| before | 01/01/2018 at 00:00 | before | `MM/DD/YYYY at HH:mm` |

## Demo
Lorem Ipsum...

## Usage

Install package:
```sh
npm install --save react-last-status
```

Import component:
```js
import LastStatus from 'react-last-status';
```

Add component with respective props:
```js
<LastStatus timestamp={timestamp}/>
```

## Props
### timestamp
Lorem Ipsum...
### locale
Lorem Ipsum...
### limiarOnline
Lorem Ipsum...
### online
Lorem Ipsum...
### today
Lorem Ipsum...
### yesterday
Lorem Ipsum...
### lastWeek
Lorem Ipsum...
### before
Lorem Ipsum...

## Languages
Setting the language of component with props. 

```js
<LastStatus locale={'pt-BR'}/>
```

| locale | language |
| :---: | :---: |
| es-US | english |
| pt-BR | portuguese (Brazil) |