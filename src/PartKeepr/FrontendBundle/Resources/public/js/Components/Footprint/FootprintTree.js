Ext.define("PartKeepr.FootprintTree", {
	extend: 'PartKeepr.CategoryEditorTree',
	alias: 'widget.FootprintTree',
	xtype: 'partkeepr.FootprintTree',
    viewConfig: {
        plugins: {
            ptype: 'treeviewdragdrop',
            sortOnDrop: true,
            ddGroup: 'FootprintCategoryTree'
        }
    },
	folderSort: true,

	categoryModel: "PartKeepr.FootprintBundle.Entity.FootprintCategory",

	/**
     * @cfg {String} text The path to the 'add' icon
     */
	addButtonIcon: 'bundles/partkeeprfrontend/images/icons/footprint_add.png',

	/**
     * @cfg {String} text The path to the 'delete' icon
     */
	deleteButtonIcon: 'bundles/partkeeprfrontend/images/icons/footprint_delete.png',

	listeners: {
		"foreignModelDrop": function (record, target) {
			record.setCategory(target);
			record.save();

			if (record.store && record.store.reload) {
				record.store.reload();
			}
		}
	}
});