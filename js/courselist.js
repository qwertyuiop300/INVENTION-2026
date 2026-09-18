document.addEventListener("DOMContentLoaded", () => {
  const filterSidebar = document.getElementById("courseFilter");

  const filterOverlay = document.getElementById("filterOverlay");

  const openFilterButton = document.getElementById("openFilter");

  const closeFilterButton = document.getElementById("closeFilter");

  const filterForm = document.getElementById("courseFilterForm");

  const resetFilterButton = document.getElementById("resetFilter");

  const searchInput = document.getElementById("filterSearch");

  const resultCount = document.getElementById("courseResultCount");

  if (!filterSidebar || !filterForm) {
    return;
  }

  /* ========================================================
     MOBILE FILTER
     ======================================================== */

  const openFilter = () => {
    filterSidebar.classList.add("active");

    filterOverlay?.classList.add("active");

    document.body.classList.add("filter-open");
  };

  const closeFilter = () => {
    filterSidebar.classList.remove("active");

    filterOverlay?.classList.remove("active");

    document.body.classList.remove("filter-open");
  };

  openFilterButton?.addEventListener("click", openFilter);

  closeFilterButton?.addEventListener("click", closeFilter);

  filterOverlay?.addEventListener("click", closeFilter);

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeFilter();
    }
  });

  /* ========================================================
     GET SELECTED VALUES
     ======================================================== */

  const getSelectedValues = (name) => {
    return [
      ...filterForm.querySelectorAll(`input[name="${name}"]:checked`),
    ].map((input) => input.value);
  };

  /* ========================================================
     GET FILTER DATA
     ======================================================== */

  const getFilterData = () => {
    return {
      search: searchInput?.value.trim().toLowerCase() || "",

      category: document.getElementById("filterCategory")?.value || "",

      duration: document.getElementById("filterDuration")?.value || "",

      status: document.getElementById("filterStatus")?.value || "",

      levels: getSelectedValues("level"),

      goals: getSelectedValues("goal"),

      ai: getSelectedValues("ai"),
    };
  };

  /* ========================================================
     NORMALIZE ARRAY
     ======================================================== */

  const getCourseArray = (value) => {
    if (!value) {
      return [];
    }

    return value
      .split(",")
      .map((item) => item.trim())
      .filter(Boolean);
  };

  /* ========================================================
     MATCH COURSE
     ======================================================== */

  const matchesCourse = (course, filters) => {
    const title = course.dataset.title?.toLowerCase() || "";

    const description = course.dataset.description?.toLowerCase() || "";

    const category = course.dataset.category || "";

    const duration = course.dataset.duration || "";

    const status = course.dataset.status || "";

    const level = course.dataset.level || "";

    const goals = getCourseArray(course.dataset.goals);

    const aiFeatures = getCourseArray(course.dataset.ai);

    /* SEARCH */

    if (filters.search) {
      const searchableText = `${title} ${description}`;

      if (!searchableText.includes(filters.search)) {
        return false;
      }
    }

    /* CATEGORY */

    if (filters.category && category !== filters.category) {
      return false;
    }

    /* DURATION */

    if (filters.duration && duration !== filters.duration) {
      return false;
    }

    /* STATUS */

    if (filters.status && status !== filters.status) {
      return false;
    }

    /* LEVEL */

    if (filters.levels.length > 0 && !filters.levels.includes(level)) {
      return false;
    }

    /* GOALS */

    if (filters.goals.length > 0) {
      const hasGoal = filters.goals.some((goal) => goals.includes(goal));

      if (!hasGoal) {
        return false;
      }
    }

    /* AI */

    if (filters.ai.length > 0) {
      const hasAiFeature = filters.ai.some((feature) =>
        aiFeatures.includes(feature),
      );

      if (!hasAiFeature) {
        return false;
      }
    }

    return true;
  };

  /* ========================================================
     EMPTY STATE
     ======================================================== */

  const createEmptyState = () => {
    const emptyState = document.createElement("div");

    emptyState.id = "courseEmptyState";

    emptyState.className = "course-empty-state";

    emptyState.innerHTML = `
      <div class="empty-state-icon">
        <i class="fa-solid fa-magnifying-glass"></i>
      </div>

      <h3>Course tidak ditemukan</h3>

      <p>
        Coba ubah kata pencarian atau
        kombinasi filter yang kamu gunakan.
      </p>

      <button
        type="button"
        class="btn-empty-reset"
      >
        Reset Filter
      </button>
    `;

    emptyState
      .querySelector(".btn-empty-reset")
      ?.addEventListener("click", resetFilters);

    return emptyState;
  };

  /* ========================================================
     APPLY FILTER
     ======================================================== */

  const applyFilters = () => {
    const filters = getFilterData();

    const courses = [...document.querySelectorAll(".kartu-kursus")];

    let visibleCount = 0;

    courses.forEach((course) => {
      const matched = matchesCourse(course, filters);

      course.classList.toggle("course-hidden", !matched);

      if (matched) {
        visibleCount++;
      }
    });

    /* UPDATE RESULT */

    if (resultCount) {
      resultCount.textContent = `${visibleCount} ${
        visibleCount === 1 ? "course" : "courses"
      }`;
    }

    /* EMPTY STATE */

    const courseGrid = document.querySelector(".course-grid");

    let emptyState = document.getElementById("courseEmptyState");

    if (visibleCount === 0 && courseGrid) {
      if (!emptyState) {
        emptyState = createEmptyState();

        courseGrid.appendChild(emptyState);
      }

      emptyState.style.display = "flex";
    } else if (emptyState) {
      emptyState.style.display = "none";
    }

    /* CLOSE MOBILE FILTER */

    if (window.innerWidth <= 900) {
      closeFilter();
    }
  };

  /* ========================================================
     RESET
     ======================================================== */

  function resetFilters() {
    filterForm.reset();

    applyFilters();
  }

  /* ========================================================
     FORM SUBMIT
     ======================================================== */

  filterForm.addEventListener("submit", (event) => {
    event.preventDefault();

    applyFilters();
  });

  /* ========================================================
     RESET BUTTON
     ======================================================== */

  resetFilterButton?.addEventListener("click", resetFilters);

  /* ========================================================
     LIVE SEARCH
     ======================================================== */

  let searchTimeout;

  searchInput?.addEventListener("input", () => {
    clearTimeout(searchTimeout);

    searchTimeout = setTimeout(() => {
      applyFilters();
    }, 250);
  });

  /* ========================================================
     BOOKMARK BUTTON
     ======================================================== */

  document.addEventListener("click", (event) => {
    const bookmark = event.target.closest(".tombol-simpan");

    if (!bookmark) {
      return;
    }

    /*
     * Jangan membuka course.html
     * ketika tombol bookmark diklik.
     */

    event.preventDefault();

    event.stopPropagation();

    const icon = bookmark.querySelector("i");

    if (!icon) {
      return;
    }

    icon.classList.toggle("fa-regular");

    icon.classList.toggle("fa-solid");

    bookmark.classList.toggle("tersimpan");
  });

  /* ========================================================
     INITIAL STATE
     ======================================================== */

  applyFilters();
});
