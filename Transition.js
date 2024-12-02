window.onload = () => {
  const anchors = document.querySelectorAll('a');
  const transition_el = document.querySelector('.transition');

  setTimeout(() => {
      transition_el.classList.remove('is-active');
  }, 500);

  for (let i = 0; i < anchors.length; i++) {
      const anchor = anchors[i];

      anchor.addEventListener('click', e => {
          const target = anchor.href;
          if (anchor.hostname !== window.location.hostname) {
              return;
          }

          e.preventDefault();

          transition_el.classList.add('is-active');

          setTimeout(() => {
              window.location.href = target;
          }, 500);
      });
  }
};
