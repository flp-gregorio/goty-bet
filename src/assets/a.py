import json
import os

# Define the file names
input_file_name = 'data.json'
output_file_name = 'transformed_data.json'

# Get the current directory
current_directory = os.path.dirname(os.path.abspath(__file__))

# Define the full paths
input_file_path = os.path.join(current_directory, input_file_name)
output_file_path = os.path.join(current_directory, output_file_name)

# Load the original JSON file
with open(input_file_path, 'r') as file:
    data = json.load(file)

# Transform the JSON data to the new structure
transformed_data = {}
for category, nominees in data.items():
    # Extract the description from the first nominee if available
    description = nominees[0].get("Description", "No description available") if nominees else "No description available"
    # Remove the description entry from the nominees
    transformed_nominees = [nominee for nominee in nominees if "Description" not in nominee]
    
    transformed_data[category] = {
        "description": description,
        "nominees": transformed_nominees
    }

# Save the transformed JSON to a new file
with open(output_file_path, 'w') as transformed_file:
    json.dump(transformed_data, transformed_file, indent=4)

print(f"Transformed data saved to {output_file_path}")

