<template>
    <form action="" method="post" enctype="multipart/form-data">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header">General Information</div>
                    <div class="card-body">
                        <div class="form-group">
                            <div id="person">
                                <select name="person" class="form-control">
                                    <option value="">select</option>
                                    <!--                                        @foreach(App\User::all() as $user)-->
                                    <option value=" ">name</option>
                                    <!--                                        @endforeach-->
                                </select>
                            </div>

                        </div>
                        <input type="file" name="file[]" multiple>
                        <div class="form-group">
                            <textarea name="body" class="form-control"></textarea>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </form>
</template>

<script>
    export default {
        name: "SendEmail"
    }
</script>

<style scoped>

</style>
