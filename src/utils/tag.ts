export function addTag(note: String, isTagFromNote: Boolean): any[] {
  const tags = new Set();

  if (!isTagFromNote) {
    tags.add('#' + note.split('#').join('').split(' ').join('_'));
  } else {
    note.split(' ').forEach(element => { 
      if (element[0] === '#' && element.length > 1) {
        tags.add(element);
      }
    })
  }

  return Array.from(tags);
} 
