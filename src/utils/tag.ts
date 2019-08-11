export function addTag(note: String, tagFromNote: Boolean): any[] {
  const tags = new Set();

  if(tagFromNote) {
    note.split(' ').forEach(element => { 
      if(element[0] === '#' && element.length > 1) {
        tags.add(element)
      }
    })
  } else {
      tags.add('#' + note.split(' ').join('_'))
  }
  return Array.from(tags);
} 
