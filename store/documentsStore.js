// stores/documentsStore.js
import { defineStore } from 'pinia';

export const useDocumentsStore = defineStore({
    id: 'documents',
    state: () => ({
        currentDocument: null,
    }),
    actions: {
        setCurrentDocument(document) {
            this.currentDocument = document;
        },
    },
});


