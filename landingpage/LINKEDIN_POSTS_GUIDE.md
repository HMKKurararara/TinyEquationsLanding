# LinkedIn Posts Configuration Guide

## How to Update LinkedIn Posts on the Newsletter Page

The newsletter page automatically displays LinkedIn posts from your company page. To update which posts are shown, you only need to modify a single JSON file.

### Quick Update Steps

1. **Navigate to the configuration file:**
   ```
   /src/data/linkedin-posts.json
   ```

2. **Find your new LinkedIn post ID:**
   - Go to your LinkedIn post
   - Copy the post URL (e.g., `https://www.linkedin.com/posts/activity-7337845224234172419-xyz`)
   - Extract the numbers after `activity-` (e.g., `7337845224234172419`)

3. **Update the JSON file:**
   ```json
   {
     "posts": [
       {
         "id": "7337845224234172419",
         "title": "Your Post Title",
         "description": "Brief description for reference"
       }
     ]
   }
   ```

4. **Deploy your changes:**
   - Commit and push to your main branch
   - The Cloud Build pipeline will automatically deploy the updates

### Finding LinkedIn Activity IDs

**Method 1: From Post URL**
- LinkedIn post URLs contain the activity ID
- Look for `activity-` followed by numbers
- Example: `https://linkedin.com/posts/company_activity-1234567890` → ID is `1234567890`

**Method 2: From Embed Code**
- If you have LinkedIn's embed code, look for `urn:li:activity:`
- The numbers after this are your activity ID

**Method 3: Browser Developer Tools**
- Right-click on the post → Inspect Element
- Look for `data-activity-id` or similar attributes

### Configuration File Structure

```json
{
  "posts": [
    {
      "id": "ACTUAL_ACTIVITY_ID",
      "title": "Display name for internal reference",
      "description": "Brief description of the post content"
    }
  ],
  "instructions": {
    "howToUpdate": ["Step by step instructions"],
    "findingActivityId": ["Methods to find activity IDs"]
  }
}
```

### Important Notes

- The page will automatically skip any posts with placeholder IDs (containing `YOUR_POST_ID`)
- You can have up to 10 posts in the configuration
- Posts are displayed in the order they appear in the JSON file
- The title and description fields are for your reference only and don't appear on the website
- Changes take effect immediately after deployment

### Troubleshooting

**Post not displaying:**
- Verify the activity ID is correct and complete
- Ensure the LinkedIn post is public
- Check that the JSON syntax is valid

**Need help finding activity IDs:**
- Contact the development team
- Use browser developer tools to inspect existing working posts
- Check LinkedIn's documentation on embed codes

### Automation Tips

- Keep the most recent posts at the top of the array
- Remove old posts by deleting their entries from the JSON
- Update titles and descriptions to help track which posts are current
- Consider setting up a calendar reminder to update posts monthly