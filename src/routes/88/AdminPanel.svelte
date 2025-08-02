<script lang="ts">
    // Placeholder data and logic.  Replace with actual admin functionalities.
    let items = [
        { id: 1, name: "Item 1", status: "Active" },
        { id: 2, name: "Item 2", status: "Inactive" },
        { id: 3, name: "Item 3", status: "Active" },
    ];

    function toggleStatus(id: any) {
        items = items.map((item) =>
            item.id === id
                ? {
                      ...item,
                      status: item.status === "Active" ? "Inactive" : "Active",
                  }
                : item,
        );
    }

    function addItem() {
        const newId =
            items.length > 0
                ? Math.max(...items.map((item) => item.id)) + 1
                : 1;
        items = [
            ...items,
            { id: newId, name: `New Item ${newId}`, status: "Inactive" },
        ];
    }

    function deleteItem(id: any) {
        items = items.filter((item) => item.id !== id);
    }
</script>

<div class="admin-panel">
    <h2>Admin Panel</h2>

    <button on:click={addItem}>Add New Item</button>

    {#each items as item (item.id)}
        <div class="item">
            <span>{item.name} (ID: {item.id}) - Status: {item.status}</span>
            <button on:click={() => toggleStatus(item.id)}>Toggle Status</button
            >
            <button on:click={() => deleteItem(item.id)}>Delete</button>
        </div>
    {/each}
</div>

<style>
    .admin-panel {
        padding: 1em;
        border: 1px solid #ccc;
        border-radius: 5px;
        margin-top: 1em;
        background-color: #fff;
        color: #883;
    }

    .item {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0.5em;
        margin-bottom: 0.5em;
        border-bottom: 1px solid #eee;
    }

    button {
        padding: 0.5em 1em;
        background-color: #4caf50;
        color: white;
        border: none;
        border-radius: 3px;
        cursor: pointer;
        margin-left: 0.5em;
    }

    button:hover {
        background-color: #367c39;
    }
</style>
