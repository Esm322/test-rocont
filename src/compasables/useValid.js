export default function useValid() {
  const outBlur = (input) => {
    if (input.value.length === 0) {
      input.classList.add('error');
    } else {
      input.classList.remove('error');
    }
  }

  return {
    outBlur,
  }
}
