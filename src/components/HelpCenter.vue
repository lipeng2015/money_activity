<template>
  <!--<el-collapse v-model="activeName" accordion class="help">-->
    <!--<el-collapse-item title="Pengguna seperti apa yang dapat mengajukan permohonan pinjaman?" name="1">-->
      <!--<div>{{app_name}} tidak membatasi pekerjaan,pendapatan,ataukondisi anda yang lainnya.Selama umur anda sudah-->
        <!--mencapai-->
        <!--21 tahun dan anda memiliki pendapatan dan nomor ponsel yang tatap,anda dapat mengajukan permohonan pinjaman-->
        <!--kepada {{app_name}}.-->
      <!--</div>-->
    <!--</el-collapse-item>-->
    <!--<el-collapse-item title="Bagaimana cara mengaijukan permohonan pinjaman?" name="2">-->
      <!--<div>Silahkkan buka Google Play dan cari app {{app_name}},kemudian download app tersebut.Setelah selesai-->
        <!--mendownload,buka app tersebut dan anda dapat memulai proses permohonan pinjaman-->
      <!--</div>-->
    <!--</el-collapse-item>-->
    <!--<el-collapse-item title="Bagaimana cara mengembalikan pinjaman?Apakah dapat mengembalikan pinjaman lebih awal?"-->
                      <!--name="3">-->
      <!--<div>Kami akan mengirimkan pesan ke email dan ponsel anda satu hari sebelum tanggal jatuh tempo untuk mengingatkan-->
        <!--anda agar mengembalikan pinjaman.Anda dapat mengembalikan pinjaman melalui Alfamart atau memalui-->
        <!--e-banking,mobile banking,dan transfer ATM bank besar.Setelah sukses mentransfer,app {{app_name}} akan secara-->
        <!--otomatis mendapatkan sinyal pengembalian pinjaman dan melunasi pinjaman anda.Kami mendukung pengembalian-->
        <!--pinjaman lebih awal.-->
      <!--</div>-->
    <!--</el-collapse-item>-->
    <!--<el-collapse-item title="Dokumen apa saja yang perlu dipersiapkan?Bagaimana proses tinjauan?" name="4">-->
      <!--<div>Anda hanya perlu mengikuti petunjuk sistem kami untuk mengisi 4 halaman informasi(Informasi pribadi,informasi-->
        <!--pekerjaan,informasi kontak,dan upload foto anda),mohon pastikan untuk mengisi informasi asli anda.Sistem akan-->
        <!--melakukan analisa mahadata,multi-demensi kalkulasi skor kredit,dan skor gabungan komprehensif berdasarkan-->
        <!--infomasi yang talah anda berikan untuk mengkalkulasi hasil review pinjaman.-->
      <!--</div>-->
    <!--</el-collapse-item>-->
    <!--<el-collapse-item title="Apa itu masa tenggang?Berapa biaya pada masa tenggang?" name="5">-->
      <!--<div>Masa tenggang adalah hari sedikit setelah pinjaman berakhir.Masa tenggang tidak mempengaruhi catatan kredit-->
        <!--anda,kami tidak akan mengupload informasi anda pada sistem informasi peminjam Bank Indonesia.Tetapi,maka akan-->
        <!--dikenakan bunga dengan jumlah yang sudah ditentukan.-->
      <!--</div>-->
    <!--</el-collapse-item>-->

    <!--<el-collapse-item title="Apa itu terlambat (lewat tanggal jatuh tempo)?Bagaimana cara menghitung denta terlambat? "-->
                      <!--name="6">-->
      <!--<div>Pinjaman anda terlambat jika anda tidak dapat mengembalikan pinjaman pada/sebelum tanggal jatuh tempo.Jika-->
        <!--pengembalian pinjaman melebihi tanggal jatuh tempo maka akan dikenakan bunga dengan jumlah yang sudah-->
        <!--ditentukan.-->
      <!--</div>-->
    <!--</el-collapse-item>-->

    <!--<el-collapse-item-->
      <!--title="Jika Pengguna tidak dapat mengembalikan pinjaman dengan tepat waktu,akan ada konsekuensi apa? "-->
      <!--name="7">-->
      <!--<div>Kami akan mengambil langkah-langkah legal untuk mengkoleksi pinjaman dan kami juga akan mengenakan denda dan-->
        <!--biaya manajemen extra.uNTUK PERSYARATAN DETILNYA ANDA DAPAT MEMBACA PERJANJIAN PINJAMAN KAMI.Jika anda melakukan-->
        <!--pelanggaran serius,kami dapat mengungkapkan informasi pribadi anda,dan anda tidak akan dapat mengajukan-->
        <!--permohonan pinjaman lagi pada kami.Kami juga akan mengupload catatan kredit anda pada Arsip Kredit Nasional.-->
      <!--</div>-->
    <!--</el-collapse-item>-->

    <!--<el-collapse-item-->
      <!--title="Mengapa tinjauan pinjaman saya tidak lolos?Apakah saya boleh mengajukan permohonan lagi?"-->
      <!--name="8">-->
      <!--<div>Mohon maaf,karena skor komprehensif anda tidak mencukupi,untuk sementara permohonan pinjaman anda belum dapat-->
        <!--disetujui.Sistem akan melakukan analisa mahadata dan mengaudit secara otomatis.Karena alasan pengendalian-->
        <!--risiko,kami tidak dapat memberikan rincian skor kredit anda dan alasan detil pemohonan anda ditolak.Jika-->
        <!--informasi anda untuk mengajukan permohonan lagi dalam waktu dekat.Jika ada keperluan untuk meminjam,silahkan-->
        <!--mencoba lagi minimal 7 hari kemudian.-->
      <!--</div>-->
    <!--</el-collapse-item>-->

    <!--<el-collapse-item-->
      <!--title="Apakah informasi saya akan bocor?"-->
      <!--name="9">-->
      <!--<div>Kami berjanji bahwa kami tidak akan mengungkapkan informasi pribadi anda pada pihak ketiga tanpa persetujuan-->
        <!--dari anda (dikecualikan pengembalian terlambat dan kebutuhan layanan)-->
      <!--</div>-->
    <!--</el-collapse-item>-->

    <!--<el-collapse-item-->
      <!--title="Bagaimana cara menghitung tanggal jatuh tempo?Bagaimana cara memeriksa tanggal jatuh tempo pinjaman?"-->
      <!--name="10">-->
      <!--<div>-->
        <!--Tanggal jatuh tempo dijadwalkan 7 hari atau 14 hari setelah tanggal pengeluaran pinjaman (berdasarkan jangka-->
        <!--waktu pinjaman yang telah anda pilih sebelumnya).Setelah pinjaman berhasil,anda dapat memeriksa tanggal jatuh-->
        <!--tempo pinjaman pada halaman utama app.-->
      <!--</div>-->
    <!--</el-collapse-item>-->
  <!--</el-collapse>-->
  <div>
    <a-collapse accordion>
      <a-collapse-panel header="Pengguna seperti apa yang dapat mengajukan permohonan pinjaman?" key="1">
        <p>{{app_name}} tidak membatasi pekerjaan,pendapatan,ataukondisi anda yang lainnya.Selama umur anda sudah
          mencapai
          21 tahun dan anda memiliki pendapatan dan nomor ponsel yang tatap,anda dapat mengajukan permohonan pinjaman
          kepada {{app_name}}.</p>
      </a-collapse-panel>
      <a-collapse-panel header="Bagaimana cara mengaijukan permohonan pinjaman?" key="2" :disabled='false'>
        <p>Silahkkan buka Google Play dan cari app {{app_name}},kemudian download app tersebut.Setelah selesai
          mendownload,buka app tersebut dan anda dapat memulai proses permohonan pinjaman</p>
      </a-collapse-panel>
      <a-collapse-panel header="Bagaimana cara mengembalikan pinjaman?Apakah dapat mengembalikan pinjaman lebih awal?"
                        key="3">
        <p>Kami akan mengirimkan pesan ke email dan ponsel anda satu hari sebelum tanggal jatuh tempo untuk mengingatkan
          anda agar mengembalikan pinjaman.Anda dapat mengembalikan pinjaman melalui Alfamart atau memalui
          e-banking,mobile banking,dan transfer ATM bank besar.Setelah sukses mentransfer,app {{app_name}} akan secara
          otomatis mendapatkan sinyal pengembalian pinjaman dan melunasi pinjaman anda.Kami mendukung pengembalian
          pinjaman lebih awal.</p>
      </a-collapse-panel>
      <a-collapse-panel header="Dokumen apa saja yang perlu dipersiapkan?Bagaimana proses tinjauan?"
                        key="4">
        <p>Anda hanya perlu mengikuti petunjuk sistem kami untuk mengisi 4 halaman informasi(Informasi pribadi,informasi
          pekerjaan,informasi kontak,dan upload foto anda),mohon pastikan untuk mengisi informasi asli anda.Sistem akan
          melakukan analisa mahadata,multi-demensi kalkulasi skor kredit,dan skor gabungan komprehensif berdasarkan
          infomasi yang talah anda berikan untuk mengkalkulasi hasil review pinjaman.</p>
      </a-collapse-panel>
      <a-collapse-panel header="Apa itu masa tenggang?Berapa biaya pada masa tenggang?"
                        key="5">
        <p>Masa tenggang adalah hari sedikit setelah pinjaman berakhir.Masa tenggang tidak mempengaruhi catatan kredit
          anda,kami tidak akan mengupload informasi anda pada sistem informasi peminjam Bank Indonesia.Tetapi,maka akan
          dikenakan bunga dengan jumlah yang sudah ditentukan.</p>
      </a-collapse-panel>
      <a-collapse-panel header="Apa itu terlambat (lewat tanggal jatuh tempo)?Bagaimana cara menghitung denta terlambat?"
                        key="6">
        <p>Pinjaman anda terlambat jika anda tidak dapat mengembalikan pinjaman pada/sebelum tanggal jatuh tempo.Jika
          pengembalian pinjaman melebihi tanggal jatuh tempo maka akan dikenakan bunga dengan jumlah yang sudah
          ditentukan.</p>
      </a-collapse-panel>
      <a-collapse-panel header="Jika Pengguna tidak dapat mengembalikan pinjaman dengan tepat waktu,akan ada konsekuensi apa?"
                        key="7">
        <p>Kami akan mengambil langkah-langkah legal untuk mengkoleksi pinjaman dan kami juga akan mengenakan denda dan
          biaya manajemen extra.uNTUK PERSYARATAN DETILNYA ANDA DAPAT MEMBACA PERJANJIAN PINJAMAN KAMI.Jika anda melakukan
          pelanggaran serius,kami dapat mengungkapkan informasi pribadi anda,dan anda tidak akan dapat mengajukan
          permohonan pinjaman lagi pada kami.Kami juga akan mengupload catatan kredit anda pada Arsip Kredit Nasional.</p>
      </a-collapse-panel>
      <a-collapse-panel header="Mengapa tinjauan pinjaman saya tidak lolos?Apakah saya boleh mengajukan permohonan lagi?"
                        key="8">
        <p>Mohon maaf,karena skor komprehensif anda tidak mencukupi,untuk sementara permohonan pinjaman anda belum dapat
          disetujui.Sistem akan melakukan analisa mahadata dan mengaudit secara otomatis.Karena alasan pengendalian
          risiko,kami tidak dapat memberikan rincian skor kredit anda dan alasan detil pemohonan anda ditolak.Jika
          informasi anda untuk mengajukan permohonan lagi dalam waktu dekat.Jika ada keperluan untuk meminjam,silahkan
          mencoba lagi minimal 7 hari kemudian.</p>
      </a-collapse-panel>
      <a-collapse-panel header="Apakah informasi saya akan bocor?"
                        key="9">
        <p>Kami berjanji bahwa kami tidak akan mengungkapkan informasi pribadi anda pada pihak ketiga tanpa persetujuan
          dari anda (dikecualikan pengembalian terlambat dan kebutuhan layanan)</p>
      </a-collapse-panel>
      <a-collapse-panel header="Bagaimana cara menghitung tanggal jatuh tempo?Bagaimana cara memeriksa tanggal jatuh tempo pinjaman?"
                        key="10">
        <p>Tanggal jatuh tempo dijadwalkan 7 hari atau 14 hari setelah tanggal pengeluaran pinjaman (berdasarkan jangka
          waktu pinjaman yang telah anda pilih sebelumnya).Setelah pinjaman berhasil,anda dapat memeriksa tanggal jatuh
          tempo pinjaman pada halaman utama app.</p>
      </a-collapse-panel>
    </a-collapse>
  </div>
</template>

<script>
  export default {
    name: "help-center",
    data() {
      return {
        activeName: '1',
        app_name: 'Teman-Cash',
        text: `A dog is a type of domesticated animal.Known for its loyalty and faithfulness,it can be found as a welcome guest in many households across the world.`,
      };
    }
  }
</script>

<style scoped>
  .help {
    width: 100%;
    background: white;
    padding-left: 10px;
    padding-right: 10px;
  }
</style>
