import Status from '../Status/Status.vue'
export default {
  components: {
    Status,
  },
  data() {
    return {
      campaign: {
        "headings" : [ " ","Campaign Name","Schedule","Audience","Status","Action" ],
        "names" : [ "Dakes Monthly","Kellogs","Del monte","Maria Callender" ],
        "schedule" : [ "Aug 18 2018 - Sep 18 2018","Oct 18 2018 - Nov 18 2018","Dec 18 2018 - Jan 18 2019","Feb 18 2018 - Mar 18 2019","Apr 18 2018 - May 18 2019" ],
        "audience" : [ "18,769","20,231","12,362","17,453" ],
        "status" : [ "In Progress","Ready For Review","Completed","In Progress" ]
      },
      msg: 'Hello Table Component',
      seen: 1,
      preview: null
    }
  },
  methods: {
    show() {
      if(this.seen = 0) {
        this.seen = 1
      } 
      else {
      	this.seen = 0
      }
    }
  }
}
