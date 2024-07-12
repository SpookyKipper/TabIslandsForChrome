// Saves options to chrome.storage
const saveOptions = () => {
  const auto_disband_group = document.getElementById('auto_disband_group').checked;
  const auto_created_group_name = document.getElementById('auto_created_group_name').value;

  chrome.storage.sync.set(
    { auto_disband_group: auto_disband_group, auto_created_group_name: auto_created_group_name},
    () => {
      // Update status to let user know options were saved.
      const status = document.getElementById('status');
      status.textContent = 'Options saved.';
      setTimeout(() => {
        status.textContent = '';
      }, 750);
    }
  );
};

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
const restoreOptions = () => {
  chrome.storage.sync.get(
    {auto_disband_group: true, auto_created_group_name: "Island"},
    (items) => {
        document.getElementById('auto_disband_group').checked = items.auto_disband_group;
        document.getElementById('auto_created_group_name').value = items.auto_created_group_name;
    }
  );
};

document.addEventListener('DOMContentLoaded', restoreOptions);
document.getElementById('save').addEventListener('click', saveOptions);