function setPageTitle(title: string) {
  const el = document.getElementsByTagName('title')[0];
  el.innerText = title;
}

function setPageDescription(description: string) {
  const existingDesc = document.head.querySelectorAll('meta[name=description]')[0];

  const desc = existingDesc || document.createElement('meta');
  desc.setAttribute('name', 'description');
  desc.setAttribute('content', description);

  if (!existingDesc) {
    document
      .getElementsByTagName('head')[0]
      .appendChild(desc);
  }
}

export default {
  setPageTitle,
  setPageDescription,
};
