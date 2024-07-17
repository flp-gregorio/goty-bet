import json
import os

# Define the file names
input_file_name = 'data.json'
output_file_name = 'transformed_data.json'
genre_lookup_file_name = 'genre_lookup.json'
description_lookup_file_name = 'description_lookup.json'

# Get the current directory
current_directory = os.path.dirname(os.path.abspath(__file__))

# Define the full paths
input_file_path = os.path.join(current_directory, input_file_name)
output_file_path = os.path.join(current_directory, output_file_name)
genre_lookup_file_path = os.path.join(current_directory, genre_lookup_file_name)
description_lookup_file_path = os.path.join(current_directory, description_lookup_file_name)

# Load the original JSON file
with open(input_file_path, 'r', encoding='utf-8') as file:
    data = json.load(file)

# Load the genre lookup
with open(genre_lookup_file_path, 'r', encoding='utf-8') as file:
    genre_lookup = json.load(file)

# Load the description lookup
with open(description_lookup_file_path, 'r', encoding='utf-8') as file:
    description_lookup = json.load(file)

# Transform the JSON data to the new structure
transformed_data = {}
for category, category_data in data.items():
    # Extract the description from the lookup if available
    description = description_lookup.get(category, "No description available")
    
    # Transform nominees and update genres
    transformed_nominees = []
    for nominee in category_data['nominees']:
        if isinstance(nominee, dict):  # Check if nominee is a dictionary
            print(f"Processing nominee: {nominee}")  # Debug print
            if nominee.get('Genre', 'Unknown') == "Unknown":
                nominee['Genre'] = genre_lookup.get(nominee['Nominee'], "Unknown")
            transformed_nominees.append(nominee)
        else:
            print(f"Unexpected nominee format: {nominee}")  # Debug print
    
    transformed_data[category] = {
        "description": description,
        "nominees": transformed_nominees
    }

# Save the transformed JSON to a new file
with open(output_file_path, 'w', encoding='utf-8') as transformed_file:
    json.dump(transformed_data, transformed_file, indent=4, ensure_ascii=False)

print(f"Transformed data saved to {output_file_path}")
