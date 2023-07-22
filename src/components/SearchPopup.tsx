"use client";
import { SearchResult } from "@/lib/posts";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import Modal from "./Modals/Modal";
import SearchImage from "./SearchImage";
import { ImSearch } from "react-icons/im";

const SearchPopup = ({ label }: { label?: string }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<SearchResult[] | []>([]);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  // Function to handle search button click
  const handleSearchButtonClick = () => {
    setIsSearchOpen((prevState) => !prevState); // Toggle the search input
    setSearchResults([]); // Clear the search results when closing the search input
  };

  // UseEffect to perform the search when the searchQuery changes
  useEffect(() => {
    if (searchQuery.trim().length > 0) {
      // Function to perform the search
      const performSearch = async () => {
        try {
          // Trim the search query to remove leading/trailing spaces
          const trimmedSearchQuery = searchQuery.trim();

          if (trimmedSearchQuery.length === 0) {
            setSearchResults([]);
            return;
          }

          // Make the API call using fetch
          const response = await fetch("/api/search", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(trimmedSearchQuery),
          });

          if (response.ok) {
            const data: SearchResult[] = await response.json();
            setSearchResults(data);
          } else {
            // Handle error if needed
            console.error("Failed to fetch search results.");
          }
        } catch (error) {
          // Handle error if needed
          console.error(
            "An error occurred while fetching search results.",
            error
          );
        }
      };

      setTimeout(() => {
        performSearch();
      }, 600);
    } else {
      setSearchResults([]);
    }
  }, [searchQuery]);

  return (
    <div className="flex  justify-center ">
      {/* Trigger button */}
      <button
        onClick={handleSearchButtonClick}
        className="flex justify-center gap-2 items-center ">
        <ImSearch className="h-[25px] w-[25px]  " />
        {label && <span> {label}</span>}
      </button>

      {/* Modal */}

      <Modal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        topLeft>
        <div className="min-h-[200px]">
          {/* Search input */}
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="border border-gray-300 dark:border-gray-600 px-4 py-2 rounded-full w-[88%]  text-black bg-gray-100 dark:bg-white"
            placeholder="Enter search keywords..."
          />

          {/* Search results */}
          <div className="mt-2">
            {searchResults.length > 0 ? (
              searchResults?.map((result) => (
                <div
                  key={result.id}
                  className="border-b border-gray-200 py-2 "
                  onClick={() => setIsSearchOpen(false)}>
                  <Link
                    className="flex items-center gap-2"
                    href={`/${
                      result.categories.nodes[0].slug == "posts"
                        ? "blog"
                        : "projects"
                    }/${result.slug}`}>
                    {result?.featuredImage?.node?.mediaDetails?.sizes[0]
                      .sourceUrl ? (
                      <SearchImage
                        imgSrc={
                          result?.featuredImage?.node?.mediaDetails?.sizes[0]
                            .sourceUrl
                        }
                      />
                    ) : (
                      <SearchImage />
                    )}
                    <h3 className="text-lg font-bold">{result.title}</h3>
                  </Link>
                </div>
              ))
            ) : (
              <p>No search results found.</p>
            )}
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default SearchPopup;
