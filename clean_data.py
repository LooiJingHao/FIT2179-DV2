import pandas as pd

# 1. Load the dataset
df = pd.read_csv('komuter_2026.csv')

# 2. Group by station pairs and find the top 15 highest volumes
agg_df = df.groupby(['origin', 'destination'])['ridership'].sum().reset_index()
top15_routes = agg_df.sort_values(by='ridership', ascending=False).head(15).copy()

# 3. Create a clean concatenated route label for the chart axis
top15_routes['route'] = top15_routes['origin'] + " ➔ " + top15_routes['destination']

# 4. Save the high-demand corridors file for the public folder
top15_routes.to_csv('top_komuter_routes.csv', index=False)