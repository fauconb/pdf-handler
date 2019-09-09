import com.itextpdf.forms.PdfPageFormCopier;
import com.itextpdf.kernel.pdf.PdfDocument;
import com.itextpdf.kernel.pdf.PdfPage;
import com.itextpdf.kernel.pdf.PdfReader;
import com.itextpdf.kernel.pdf.PdfWriter;

import java.io.File;
import java.io.IOException;

public class Exemple {
    public static void main(String[] args) throws IOException {

        // Création d'un fichier pour y copier la 1ere page d'un fichier pdf existant :
        File pdf = new File("C:\\test\\pdf\\pdf-sample.pdf");
        PdfDocument pdfDocument = new PdfDocument(new PdfReader(pdf));

        File resultat = new File("C:\\test\\pdf\\resultat.pdf");
        PdfDocument pdfDocument2 = new PdfDocument(new PdfWriter(resultat));
        pdfDocument.copyPagesTo(1,1, pdfDocument2, new PdfPageFormCopier());
        pdfDocument.close();
        pdfDocument2.close();


    }
}
