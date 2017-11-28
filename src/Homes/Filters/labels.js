export function getDatesLabel(state) {
  if (
    state.selectedFilter === "dates" ||
    state.dates.startDate !== null ||
    state.dates.endDate !== null
  ) {
    return `${
      state.dates.startDate
        ? state.dates.startDate.format("MMM Do")
        : `Check In`
    } — ${
      state.dates.endDate ? state.dates.endDate.format("MMM Do") : `Check out`
    }`;
  }
}
