# FilterTask-JS

Create a function (`queryData`) that can perform sorting and filtering on an array of objects (`notesList`) based on specific criteria provided by the user.

## 1. Sorting the notes

The function should sort the notes by their `createdAt` date in two ways:

- **latest** (new to old)
- **earliest** (old to new)

## 2. Filtering the notes

The function should filter the notes based on three criteria:

### 2.1. By completion status
- **completed**
- **uncompleted**
- **all** (where completion doesn't matter)

### 2.2. By title
- Return all notes whose title contains the specified keyword (case-insensitive).

### 2.3. Combination of the above two

## Example Usage

```javascript
queryData({
  sort: "latest",      // Sort notes by the most recent dates first.
  filter: "coding",    // Only include notes whose title contains "coding".
  status: "completed", // Only include notes that are completed.
});
