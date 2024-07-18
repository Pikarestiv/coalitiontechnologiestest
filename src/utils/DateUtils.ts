export function formatDateOfBirth(dateString: string): string {
  try {
    const delimiter = dateString.includes("/") ? "/" : "-";
    const segments = dateString.split(delimiter);

    let year, month, day;
    if (segments.length === 3) {
      if (segments[0].length === 4) {
        year = segments[0];
        month = segments[1];
        day = segments[2];
      } else if (segments[2].length === 4) {
        year = segments[2];
        month = segments[0];
        day = segments[1];
      } else {
        throw new Error("Invalid date format");
      }
    } else {
      throw new Error("Invalid date format");
    }

    month = month.padStart(2, "0");
    day = day.padStart(2, "0");

    const validDateString = `${year}-${month}-${day}`;

    const dateObj = new Date(validDateString);

    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return dateObj.toLocaleDateString(undefined, options);
  } catch (error) {
    return dateString;
  }
}
