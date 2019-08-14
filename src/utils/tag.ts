export const addTag = (note: string, isTagFromNote: boolean): string[] => {
  const tags = new Set();

  if (!isTagFromNote) {
    tags.add('#' + note.split('#').join('').split(' ').join('_'));

    return Array.from(tags) as string[];
  }

  note.split(' ').forEach(element => { 
    element[0] === '#' && element.length > 1
      ? tags.add(element)
      : null
  });

  return Array.from(tags) as string[];
};
