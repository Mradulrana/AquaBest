(function() {
    // Sample product list for suggestion
    const products = [
        { name: "Domestic Water Filter", url: "./domestic-water-filter.html" },
        { name: "Commercial Water Purifier", url: "./commercial-water-purifier.html" },
        { name: "Water Softener", url: "./water-softener" },
        { name: "Industrial Water Purifier", url: "./industrial-water-purifier.html" },
        { name: "Multi-Media Filtration System", url: "./multi-media-filtration-system.html" },
        { name: "Uv Water Filtration System", url: "./uv-water-filtration-system.html" },
        { name: "Industrial Water Softener", url: "./industrial-water-softener.html" },
        { name: "Copper Silver Ionization", url: "./copper-silver-ionization.html" },
        { name: "Media Collection & Anti-Scale", url: "./media-collection-anti-scale.html" },
        { name: "Commercial Water Filtration", url: "./commercial-water-filtration.html" },
        { name: "AquaBest Deionized Water System", url: "./aquabest-deionized-water-system.html" },
        { name: "Big Blue Jumbo Filters", url: "./big-blue-jumbo-filters.html" },
        { name: "Central Water Filtration System", url: "./central-water-filtration-system.html" },
        { name: "Ultraviolet-UV", url: "./ultraviolet-uv.html" },
        { name: "Shower Filter", url: "./shower-filter.html" },
        { name: "Filter Cartridges", url: "./filter-cartridges.html" },
        { name: "Water Dispenser", url: "./water-dispenser.html" },
        { name: "Water Filters", url: "./water-filters.html" },
        { name: "Anti-Scale Products", url: "./anti-scale-products.html" }
    ];

    // Function to show suggestions based on user input
    function showSuggestions(inputValue) {
        const suggestionsContainer = document.querySelector('.search__suggestions.new-suggestions-class');
        if (suggestionsContainer) {
            suggestionsContainer.innerHTML = ''; // Clear previous suggestions

            if (inputValue.trim().length === 0) {
                suggestionsContainer.style.display = 'none';
                return;
            }

            // Filter products based on user input
            const filteredProducts = products.filter(product => product.name.toLowerCase().includes(inputValue.toLowerCase()));

            // Display filtered suggestions
            filteredProducts.forEach(product => {
                const suggestionItem = document.createElement('div');
                suggestionItem.className = 'suggestions__item';
                suggestionItem.textContent = product.name;
                suggestionItem.onclick = () => {
                    window.location.href = product.url; // Redirect to product URL on click
                };
                suggestionsContainer.appendChild(suggestionItem);
            });

            // Show the suggestion container
            suggestionsContainer.style.display = 'block';
        } else {
            console.error("Suggestions container not found");
        }
    }

    // Function to handle form submission
    window.handleSearch = function(event) {
        event.preventDefault(); // Prevent default form submission behavior

        const input = document.querySelector('.search__input.new-class-name').value.trim();
        const category = document.querySelector('.search__categories').value;
        
        // Handle search logic here, e.g., redirect to search results page
        window.location.href = `/search?query=${input}&category=${category}`;
    };

    // Event listener for input changes
    const searchInput = document.querySelector('.search__input.new-class-name');
    if (searchInput) {
        searchInput.addEventListener('input', function(event) {
            const userInput = event.target.value;
            showSuggestions(userInput);
        });
    } else {
        console.error("Search input not found");
    }
})();


// share btn logic here 
const shareButton = document.querySelector('.share-btn');

shareButton.addEventListener('click', async function() {
    console.log("click")
    if (navigator.share) {
        try {
            await navigator.share({
                title: document.title,
                text: 'Check out this link!',
                url: window.location.href
            });
            console.log('Shared successfully');
        } catch (error) {
            console.error('Error sharing:', error);
        }
    } else {
        alert('Sharing not supported on this browser. You can manually copy the link.');
    }
});

document.querySelector('.facebook-share-btn').addEventListener('click', function() {
    const shareURL = encodeURIComponent(window.location.href);
    const shareText = encodeURIComponent(document.title);
    const facebookURL = `https://www.facebook.com/sharer/sharer.php?u=${shareURL}&quote=${shareText}`;
    
    window.open(facebookURL, '_blank', 'width=1000px, height=1000px');
});