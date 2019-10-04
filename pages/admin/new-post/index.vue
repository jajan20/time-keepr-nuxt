<template>
    <div class="new-post-page">
        <nuxt-link class="nuxt-link" :to="'/'">Return</nuxt-link>
        <section class="post-form">
            <AdminPostForm @submit="onSubmitted"/>
        </section>
    </div>
</template>


<script>
import AdminPostForm from '@/components/admin/AdminPostForm'
import axios from 'axios'

export default {
    components: {
        AdminPostForm
    },
    methods: {
        onSubmitted(postData) {
            function roundMinutes(m) {
                let minutes = 0
                if (m < 15 && m > 0) { minutes = 0 } 
                if (m < 30 && m > 15) { minutes = 15 } 
                if (m < 45 && m > 30) { minutes = 30 }
                if (m < 60 && m > 46) { minutes = 45 }
                return minutes
            }

            function convertTime(minutes) {
                var hours = (minutes / 60)
                var rhours = Math.floor(hours)
                var minutes = (hours - rhours) * 60
                var rminutes = Math.round(minutes)
                console.log(rhours + " hour(s) and " + rminutes + " minute(s).")
                return {
                    minutes: rminutes,
                    hours: rhours
                }
            }

            let startInMinutes = (parseInt(postData.start.substring(0,2), 10) * 60) + roundMinutes(parseInt(postData.start.substring(3,5), 10))
            let endInMinutes = (parseInt(postData.end.substring(0,2), 10) * 60) + roundMinutes(parseInt(postData.end.substring(3,5), 10))
            let breaksInMinutes = parseInt(postData.breakOne, 10) + parseInt(postData.breakTwo, 10) + parseInt(postData.breakThree, 10)
            

            // console.log(convertTime(endInMinutes - startInMinutes - breaksInMinutes))

            let time = convertTime(endInMinutes - startInMinutes - breaksInMinutes)
            let data = {
                ...postData,
                workedHours: time.hours,
                workedMinutes: time.minutes
            }
            axios.post('https://time-keepr.firebaseio.com/posts.json', data)
            .then(result => console.log(result))
            .catch(err => console.log(err))
        }
    }
}
</script>

<style scoped>
.new-post-page {
    padding: 10px;
}

.post-form {
    margin-top: 20px;
}
</style>